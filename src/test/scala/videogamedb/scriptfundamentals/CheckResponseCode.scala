package videogamedb.scriptfundamentals

import io.gatling.core.scenario.Simulation
import scala.concurrent.duration.DurationInt
import io.gatling.core.Predef._
import io.gatling.http.Predef._



class CheckResponseCode extends Simulation{

  //http config
  val httpProtocol= http.baseUrl("https://videogamedb.uk/api")
    .acceptHeader("application/json")

  //scenario
  val scn = scenario("3 GET videogame call response codes")

  .exec(http("Get all games 1st call")
  .get("/videogame")
  .check(status.is(200)))
    .pause(duration = 5)

    .exec(http(requestName = "Get a specific vedeogame")
    .get("/videogame/1")
    .check(status.in(200 to(210))))
    .pause(1,10)


    .exec(http(requestName = "Get all games 3d call")
    .get("/videogame")
    .check(status.not(400), status.not(500)))
      .pause(3000.milliseconds)



  //load
  setUp(
    scn.inject(atOnceUsers(1))
      .protocols(httpProtocol)

  )

}
