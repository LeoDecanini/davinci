import { withAuth } from "next-auth/middleware";
import { NextRequest } from "next/server";

export default withAuth({
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    authorized({ req, token }: { req: NextRequest; token: any }) {
      const pathName = req.nextUrl.pathname;

      if (pathName.includes("protected") && !token) {
        console.log("no entras");
        return false;
      }

      if (
        pathName.includes("signup") &&
        !(
          token?.user?.role === "administrador" ||
          token?.user?.role === "secretario"
        )
      ) {
        console.log("no entras");
        return false;
      }

      return true;
    },
  },
});

export const config = {
  matcher: ["/protected/:path*"],
};
