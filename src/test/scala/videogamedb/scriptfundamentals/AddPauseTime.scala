package videogamedb.scriptfundamentals

import io.gatling.core.Predef._
import io.gatling.http.Predef.http

import scala.concurrent.duration.DurationInt
import scala.language.postfixOps

class AddPauseTime extends Simulation{

  //http config
  val httpProtocol= http.baseUrl(url="https://videogamedb.uk/api")
    .acceptHeader(value="application/json")

  //scenario
  val scn= scenario("Videogames 3 Get calls")

    .exec(http(requestName= "Get all videogames 1st call"))
    .get("/videogame")
    .pause( duration= 5)

    .exec(http(requestName= "Get specific videogame"))
    .get("/videogame/1")
    .pause(1, 10)

    .exec(http(requestName= "Get all videogames 2 call"))
    .get("/videogame")
    .pause(3000 milliseconds)

  //load
  setUp(
    scn.inject(atOnceuser(users= 1))
      .protocols(httpProtocol)
  )

}
