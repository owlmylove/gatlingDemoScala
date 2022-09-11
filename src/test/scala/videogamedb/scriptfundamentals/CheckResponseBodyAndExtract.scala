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

    .exec(http("Get videogame id")
      .get("/videogame")
      .check(jsonPath("$[1].id").saveAs("gameId")))
    .exec {session => println(session); session}

    .exec(http("check the right ID has extracted")
    .get("/videogame/#{gameId}")
    .check(jsonPath("$.name").is("Gran Turismo 3"))
    .check(bodyString.saveAs("responseBody")))
    .exec {session => println(session("responseBody").as[String]); session}


  setUp(
     scn.inject(atOnceUsers(1))
       .protocols(httpProtocol)
  )

}
