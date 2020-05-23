// import { Router, Request, Response } from "express";
// import User from "../../domain/models/User";
// import Validation from "../Validation";
// import { validationResult } from "express-validator";

// export default class AuthRoutes {
//   public router: Router;
//   private validator: Validation;
//   private user: User;

//   constructor(router: Router) {
//     this.router = router;
//     this.validator = new Validation();
//     this.user = User.buildUser({});
//     this.setUpRoutes();
//   }

//   private setUpRoutes() {
//     this.router
//       .post(
//         "/login",
//         [
//           this.validator.requireEmailExists,
//           this.validator.requireValidPassword
//         ],
//         async (req: Request, res: Response) => {
//           const errors = validationResult(req);
//           if (!errors.isEmpty()) {
//             return res.send(errors);
//           }

//           const { email } = req.body;

//           await this.user.findOne({
//             table: "user_profile",
//             email
//           });

//           req.session!.userId = this.user.get("id");

//           return res.send({
//             admin: this.user.get("rol"),
//             id: this.user.get("id")
//           });
//         }
//       )
//       .post(
//         "/signup",
//         [this.validator.requireEmail, this.validator.requirePassword],
//         async (req: Request, res: Response) => {
//           const errors = validationResult(req);
//           if (!errors.isEmpty()) {
//             return res.send(errors);
//           }
//           const { email, pass } = req.body;
//           const password = await this.validator.encryptPassword(pass);

//           const user_status = 1;
//           const rol = 1;

//           this.user.set({ email, password, user_status, rol });

//           const id = await this.user.save();

//           req.session!.userId = id;

//           return res.send("The user created correctly");
//         }
//       )
//       .get("/logout", (req: Request, res: Response) => {
//         req.session = undefined;
//         res.send("Logged out");
//       });
//   }
// }
