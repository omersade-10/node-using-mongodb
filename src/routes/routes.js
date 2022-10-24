import { addnewProduct } from "../controllers/controllers";

export function routes(app) {
    app.route('/products').post(addnewProduct);
}