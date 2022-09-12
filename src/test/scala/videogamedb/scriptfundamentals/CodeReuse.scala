package videogamedb.scriptfundamentals

import io.gatling.core.scenario.Simulation
import io.gatling.http.Predef._
import io.gatling.core.Predef._

class CodeReuse extends Simulation {

  val httpProtocol = http.baseUrl("https://videogamedb.uk/api")
    .acceptHeader("application/json")

  def getAllGames() = {
    repeat(3) {
      exec(http("Get all games")
        .get("/videogame")
        .check(status.is(200)))
    }
  }

  def getSpecificGame() = {
    repeat(5, counterName = "counter") {
      exec(http("Get a specific game with id: #{counter}")
        .get("/videogame/#{counter}")
        .check(status.in(200 to 210)))
    }

  }

  val scn = scenario("Code Reuse")
    .exec(getAllGames())
    .pause(5)
    .exec(getSpecificGame())
    .pause(5)
    .repeat(2){
      getAllGames()
    }


  setUp(
    scn.inject(atOnceUsers(1))
      .protocols(httpProtocol)
  )

}
