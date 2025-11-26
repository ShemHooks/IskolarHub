import { Request, Response } from "express";
import { AccountModel } from "@/model/account.model";
import bcrypt from "bcrypt";

export class AccountController {
  constructor() {}

  async create(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const hashed = await bcrypt.hash(password, 10);

      const account = await AccountModel.create({ email, password: hashed });

      res.status(201).json(account);
    } catch (err) {
      res.status(500).json({ error: "Server Error", details: err });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const account = await AccountModel.findById(Number(id));

      if (!account) return res.status(404).json({ err: "Account Not Found" });

      res.json(account);
    } catch (err) {
      res.status(500).json({ error: "Server Error", details: err });
    }
  }
}
