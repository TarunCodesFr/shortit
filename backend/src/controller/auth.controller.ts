import { Request, Response } from 'express';
import { registerInput, loginInput } from '../validation/auth.validator';

export async function registerUser(req: Request, res: Response) {
    try {
        const validatation = registerInput.safeParse(req.body);
        if (!validatation.success) {
            return res.status(400).json({
                error: validatation.error.issues.map((e) => e.message)
            });
        }

        const { email, username, password } = validatation.data;
    } catch (err: any) {
        console.error('not working');
    }
}
