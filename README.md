# Flatbond
## Front end demo: 
https://flatbond.netlify.com/
## API demo: 
- https://flatbondapi.azurewebsites.net/config
- https://flatbondapi.azurewebsites.net/cofig/1
- https://flatbondapi.azurewebsites.net/flatbond

## Setup & Configuration
All branches have been left, so the structure and process can be observed in the history. I started with PR for stories, this added too much overhead, so I switched to creating features for the two main areas and then merging these in via a PR.
- /feature/api
- /feature/spa

To use a config option with a fixed membership fee, change the id to **2** on the following line in Flatbond.Web/src/api/api.js

`return axios.get("https://flatbondapi.azurewebsites.net/api/config/1");`

To run the solution locally you need to pull the reposiory and update the api to point to localhost for the api. The proxy in `psckage.json` will need to be updated.

`"proxy": "https://localhost:44330/"`


## Hosting
The react spa is hosted on Netlify. Changes to the master branch trigger and npm run build. If it's succesful and new deployment is triggered.

The api is hosted in azure as an App Service. It's deployed via the Visual Studio publish service. I would have liked to setup and azure pipeline and deploy directly from git changes, but I haven't done this before and I didn't fancy setting it up.

# Project Structure

## Flatbond.Api
.net core Api. Exposes /config and /flatbond endpoints. The /flatbond endpoint expects a FlatbondDto object to be posted. Dependnecies are injected using built in ioc container. Includes the following packages:
- dotnetcore.cors (adds support for Access-Control headers)
- Moq (adds support for Mocking object in unit test)

## Flatbond.DataRepositories
This simple project responsible for retrieving data. It exposes an IDataReposiory interface, enabling the provider to be replaced easily. As there is no data store in this example, the DataRepository class is essentially a mock. This is adequate for the example and for simple tests, but not an application in the wild.

## Flatbond.Domain
Contains poco classes which are used by other projects and will be passed to and from the api. Having these classes in a separate project stops the repositories having to reference the main API.
This project also contains reusbable helper functions and constants. In a larger application these would probably move to a Core project but there was no need to add that in this example.

## Flatbond.Services
This project is called from the ApiControllers and handles the business logic / core functionality. It depends on the Data Repository project and will manipluate data to return it in the correct format.
FlatbondService/CalculateMembershipFee is responsible for performing the membership fee calculation. 
The classes in this project are tested by Flatbond.Services.Tests

## Flatbond.Web
This is the static front end site. Created with create-react-app. All state is managed in the parent App.js component. The form and details are functional components which call methods on the parent to manage state. Component styling is added with Bootstrap, Reactstrap and a little bit of custom css.

## Continuous Improvemnet
If time were no object I would have completed the following addtional tasks:
- Robust validation on server side, returning better http status codes for errors
- Better code coverage of tests in the API
- Test the front end changes of the SPA using Enzyme and Jest
- Move the validation methods in the Create React Form component to a helper file
- Introduced a beter process for styling components

## Clarifications
In a business environment, I would have sought clarification around the following parts of the requirements: 
- The Client_Id property is entirely redunant in this example. 
- The get all clients method in the api is unneccesary. 
For the purpose of the test I've added them. This increases the technical debt in the solution, whilst adding no improved functionality.
