package videogamedb.scriptfundamentals

import io.gatling.core.Predef._
import io.gatling.http.Predef.http

import scala.concurrent.duration.DurationInt
import scala.language.postfixOps

class AddPauseTime extends Simulation{

  //http config
  val httpProtocol= http.baseUrl("https://videogamedb.uk/api")
    .acceptHeader("application/json")

  //scenario
  val scn= scenario("Videogames 3 Get calls")

    .exec(http("Get all videogames 1st call")
    .get("/videogame"))
    .pause(5)

    .exec(http("Get specific videogame")
    .get("/videogame/1"))
    .pause(1, 10)

    .exec(http("Get all videogames 2 call")
    .get("/videogame"))
    .pause(3000 milliseconds)

  //load
  setUp(
    scn.inject(atOnceUsers(1)))
  .protocols(httpProtocol)


}
