package videogamedb.feeders

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._

import java.time.LocalDate
import java.time.format.DateTimeFormatter
import scala.math.Equiv
import scala.util.Random

class ComplexCustomFeeder extends Simulation{

  val httpProtocol= http.baseUrl("https://videogamedb.uk/api")
    .acceptHeader("application/json")
    .contentTypeHeader("application/json")

  val idNumbers = (1 to 10).iterator
  val rnd = new Random()
  val now = LocalDate.now()
  val pattern = DateTimeFormatter.ofPattern("yyyy-MM-dd")

  def randomString(length: Int)= {
    rnd.alphanumeric.filter(_.isLetter).take(length).mkString
  }

  def getRandomDate(startDate: LocalDate, random: Random)={
    startDate.minusDays(random.nextInt(30)).format(pattern)
  }

  val customFeeder = Iterator.continually(Map(
    "gameId" -> idNumbers.next(),
    "name" -> ("Game-" + randomString(5)),
    "releaseDate" -> getRandomDate(now, rnd),
    "reviewScore" -> rnd.nextInt(100),
    "category" -> ("Category-" + randomString(6)),
    "rating" -> ("Rating-" + randomString(4))
  ))

  def authenticate()={
    exec(http("User Authenticate")
      .post("/authenticate")
      .body(StringBody("{\n  \"password\": \"admin\",\n  \"username\": \"admin\"\n}"))
      .check(jsonPath("$.token").saveAs("jwtToken")))
  }

  def createNewGame()= {
    repeat(10) {
      feed(customFeeder)
        .exec(http("Create a new game #{name}")
          .post("/videogame")
          .header("Authorization", "Bearer #{jwtToken}")
        .body(ElFileBody("bodies/newGameTemplateBody.json"))
        .check(bodyString.saveAs("responseBody")))
        .exec{session =>println(session("responseBody").as[String]); session}
        .pause(1)
    }
  }


  val scn= scenario("Complex Custom Feeder")
    .exec(authenticate())
    .exec(createNewGame())

  setUp(
    scn.inject(atOnceUsers(1))
  ).protocols(httpProtocol)

}
