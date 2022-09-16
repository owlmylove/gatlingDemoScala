package videogamedb.finalsimulation

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class VideoGameFullTest extends Simulation {

  //Jenkins CI
   val httpProtocol = http.baseUrl("https://videogamedb.uk/api")
  .acceptHeader("application/json")
  .contentTypeHeader("application/json")

  // for Travis CI
 // val httpProtocol = http.baseUrl("http://video-game-db.eu-west-2.elasticbeanstalk.com/app")
   // .header("Accept", "application/json")
    //.contentTypeHeader("application/json")


  val csvFeeder= csv("data/gameCsvFile.csv").random

  def rampUserCount = System.getProperty("USER","2").toInt
  def duringTime = System.getProperty("RAMP_DURATION", "10").toInt
  def maxDuration = System.getProperty("MAX_DURATION", "30").toInt

  before{
    println("Test start")
    println(s"Running out test with: ${rampUserCount}")
    println(s"Ramping users over: ${duringTime}")
    println(s"Total test will last: ${maxDuration}")
  }


  def authenticate()={
    exec(http("Authentication")
    .post("/authenticate")
    .body(StringBody("{\n  \"password\": \"admin\",\n  \"username\": \"admin\"\n}"))
    .check(jsonPath("$.token").saveAs("jwtToken")))
  }

  def getAllVideoGames() = {
    exec(
      http("Get all video games")
        .get("/videogame")
        .check(status.is(200)))
  }

  def createNewGame()={
    feed(csvFeeder)
    .exec(http("Create new game - #{name}")
    .post("/videogame")
      .header("Authorization", "Bearer #{jwtToken}")
      .body(ElFileBody("bodies/newGameTemplateBody.json")).asJson)
  }

  def getSingleGame()={
    exec(http("Get a single game - #{name}")
    .get("/videogame/#{gameId}")
    .check(jsonPath("$.name").is("#{name}"))
    .check(status.is(200)))
  }

  def deleteGame()={
    exec(http("Delete a game - #{name}")
    .delete("/videogame/#{gameId}")
      .header("Authorization","Bearer #{jwtToken}")
    .check(status.in(200 to 210))
    .check(bodyString.is("Video game deleted")))
  }


  val scn= scenario("Final Test Video game")
    .forever{
      exec(getAllVideoGames())
        .pause(1)
        .exec(authenticate())
        .pause(2)
        .exec(createNewGame())
        .pause(1)
        .exec(getSingleGame())
        .pause(2)
        .exec(deleteGame())
        .pause(2)
    }


  setUp(
    scn.inject(
      nothingFor(5),
      rampUsers(rampUserCount).during(duringTime)
    ).protocols(httpProtocol)
  ).maxDuration(maxDuration)
    .assertions(
      global.responseTime.max.lt(2),
      global.successfulRequests.percent.gt(99)
    )

  after{
    println("The End of Test")
  }

}