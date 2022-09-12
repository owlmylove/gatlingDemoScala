package videogamedb.scriptfundamentals

import io.gatling.core.scenario.Simulation
import io.gatling.http.Predef._
import io.gatling.core.Predef._


class Authentication extends Simulation{

  val httpProtocol= http.baseUrl("https://videogamedb.uk/api")
    .acceptHeader("application/json")
    .contentTypeHeader("application/json")

  def authenticate()={
    exec(http("User authentication")
    .post("/authenticate")
    .body(StringBody("{\n  \"password\": \"admin\",\n  \"username\": \"admin\"\n}"))
    .check(jsonPath("$.token").saveAs("jwtToken")))
  }

  def createNewUser()={
    exec(http("Create a new game")
      .post("/videogame")
      .header("Authorization","Bearer #{jwtToken}")
      .body(StringBody("{\n  \"category\": \"Platform\",\n  \"name\": \"Mario\",\n  \"rating\": \"Mature\",\n  \"releaseDate\": \"2012-05-04\",\n  \"reviewScore\": 85\n}")))

  }

  val scn= scenario("Authenticate")
    .exec(authenticate())
    .exec(createNewUser())

  setUp(
    scn.inject(atOnceUsers(1))
      .protocols(httpProtocol))


}
