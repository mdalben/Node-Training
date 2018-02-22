import "reflect-metadata";
import {createExpressServer, useContainer, useExpressServer} from "routing-controllers";
import {Container} from "typedi";
import {CategoryController} from "./controller/CategoryController";

const PORT = 5000

/**
 * Setup routing-controllers with typedi container.
 */
useContainer(Container)

/**
 * Create an express server instance.
 */
const expressApp = createExpressServer({
    /**
     * Setup own routing-controller to register on our express server.
     */
    controllers: [
        CategoryController
    ]
})

/**
 * Start express app
 */
expressApp.listen(PORT, function(){
    console.log(`Server il listening at ${PORT}`)
})