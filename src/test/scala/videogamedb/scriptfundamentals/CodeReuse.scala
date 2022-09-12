package videogamedb.scriptfundamentals

import io.gatling.core.scenario.Simulation
import io.gatling.http.Predef._
import io.gatling.core.Predef._

class CodeReuse extends Simulation{

  val httpProtocol= http.baseUrl("https://videogamedb.uk/api")
    .acceptHeader("application/json")

  def getAllGames()= {
    exec(http("Get all games")
    .get("/videogame")
    .check(status.is(200)))
  }

  def getSpecificGame()= {
    exec(http("Get a specific game")
    .get("/videogame/1")
    .check(status.in(200 to 210)))
  }

  val scn = scenario("Code Reuse")
    .exec(getAllGames())
    .pause(5)
    .exec(getSpecificGame())
    .pause(5)
    .exec(getAllGames())


  setUp(
    scn.inject(atOnceUsers(1))
      .protocols(httpProtocol)
  )

}
