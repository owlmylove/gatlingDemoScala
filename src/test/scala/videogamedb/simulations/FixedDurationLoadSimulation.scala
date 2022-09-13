package videogamedb.simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class FixedDurationLoadSimulation extends Simulation{

  val httpProtocol= http.baseUrl("https://videogamedb.uk/api")
    .acceptHeader("application/json")

  def getAllVideoGames()={
    exec(http("Get all video games")
    .get("/videogame"))
  }

  def getSpecificVideoGame()={
    exec(http("Get a specific video game")
      .get("/videogame/3"))
  }


    val scn = scenario("Fixed Duration Load Simulation")
      .forever{
        exec(getAllVideoGames())
          .pause(5)
          .exec(getSpecificVideoGame())
          .pause(5)
          .exec(getAllVideoGames())
      }



  setUp(
    scn.inject(
      nothingFor(5),
      atOnceUsers(10),
      rampUsers(20).during(30)
    ).protocols(httpProtocol)
  ).maxDuration(60)

}
