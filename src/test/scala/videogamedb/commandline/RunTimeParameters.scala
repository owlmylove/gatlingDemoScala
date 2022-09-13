package videogamedb.commandline

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class RunTimeParameters extends Simulation{

  val httpProtocol= http.baseUrl("https://videogamedb.uk/api")
    .acceptHeader("application/json")

  def getAllGames()={
    exec(http("Get all games")
      .get("/videogame"))
  }

  def getSpecificGame()={
    exec(http("Get specific game")
    .get("/videogame/4"))
  }

  val scn= scenario("Run from command line")
    .forever{
      exec(getAllGames())
        .exec(getSpecificGame())
    }.pause(1)


  setUp(
    scn.inject(
      nothingFor(5),
      rampUsers(10).during(20)
    ).protocols(httpProtocol)
  ).maxDuration(30)

}
