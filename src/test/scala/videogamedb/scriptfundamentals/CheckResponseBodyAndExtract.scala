package videogamedb.scriptfundamentals

import io.gatling.core.scenario.Simulation
import io.gatling.http.Predef._
import io.gatling.core.Predef._

class CheckResponseBodyAndExtract extends Simulation{

  val httpProtocol= http.baseUrl("https://videogamedb.uk/api")
    .acceptHeader("application/json")

  val scn = scenario("Response Body check")

    .exec(http("check flag name value")
    .get("/videogame/1")
      .check(jsonPath("$.name").is( "Resident Evil 4")))

  setUp(
     scn.inject(atOnceUsers(1))
       .protocols(httpProtocol)
  )

}
