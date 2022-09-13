package videogamedb.simulations

import io.gatling.http.Predef._
import io.gatling.core.Predef._

class BasicSimulationTest extends Simulation {

  val httpProtocol= http.baseUrl("https://videogamedb.uk/api")
    .acceptHeader("application/json")

  def getAllVideoGmaes()={
    exec(http("Get all video games")
    .get("/videogame"))
  }

  def getSpecificVideoGame()={
    exec(http("Get a specific video game")
    .get("/videogame/1"))
  }

  val scn= scenario("Basic Load test")
    .exec(getAllVideoGmaes())
    .exec(getSpecificVideoGame())


  setUp(
    scn.inject(
      nothingFor(5),
      atOnceUsers(5),
      rampUsers(10).during(10)
    ).protocols(httpProtocol)

    )


}
