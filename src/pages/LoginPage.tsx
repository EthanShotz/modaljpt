import { type FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Login submitted:", { email, remember });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
      {/* Circuit pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url(/images/patterns/circuit-pattern.svg)",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md mx-4">
        <Card>
          <CardHeader className="text-center space-y-2 pb-6">
            <h1 className="text-2xl font-heading font-bold text-primary tracking-wide">
              MODAL GLOBAL
            </h1>
            <p className="text-gray text-sm">Sign in to your account</p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* Remember / Forgot */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="remember"
                    checked={remember}
                    onCheckedChange={(checked) =>
                      setRemember(checked === true)
                    }
                  />
                  <Label
                    htmlFor="remember"
                    className="text-sm cursor-pointer text-dark"
                  >
                    Remember me
                  </Label>
                </div>
                <a
                  href="#"
                  className="text-sm text-accent hover:text-accent/80 transition-colors"
                >
                  Forgot password?
                </a>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                className="bg-secondary hover:bg-secondary/90 text-white w-full"
              >
                Sign In
              </Button>
            </form>

            {/* Separator */}
            <div className="relative my-6">
              <Separator />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-sm text-gray">
                or
              </span>
            </div>

            {/* Sign up prompt */}
            <p className="text-center text-sm text-dark/70">
              Don't have an account?{" "}
              <Link
                to="/contact"
                className="text-accent font-medium hover:text-accent/80 transition-colors"
              >
                Contact us
              </Link>
            </p>
          </CardContent>

          <CardFooter className="justify-center pb-6">
            <Link
              to="/"
              className="text-sm text-gray hover:text-primary transition-colors"
            >
              &larr; Back to home
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
