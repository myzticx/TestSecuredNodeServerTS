import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import { createRemoteJWKSet, jwtVerify } from "jose";
dotenv.config();

const issuer = process.env.KEYCLOAK_ISSUER;

if (!issuer) {
  throw new Error("KEYCLOAK_ISSUER is not defined in .env");
}

const JWKS = createRemoteJWKSet(
  new URL(`${issuer}/protocol/openid-connect/certs`),
);

export default async function authenticate(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      error: "Missing Bearer token",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const { payload } = await jwtVerify(token, JWKS, {
      issuer,
    });

    (req as any).user = payload;

    next();
  } catch {
    return res.status(401).json({
      error: "Invalid token",
    });
  }
}
