"use client";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

function SignIn() {
  return (
    <section className="mt-[200px] mb-[100px] ">
      <Card color="transparent" className="text-center">
        <div>
          <Typography variant="h4" color="white">
            Sign Up
          </Typography>
          <Typography color="white" className="mt-1 font-normal">
            Nice to meet you! Enter your details to register.
          </Typography>
          <form className="mt-8 mb-11 w-80 max-w-screen-lg sm:w-96 mx-auto">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="white" className="-mb-3">
                Your Name
              </Typography>
              <Input
                size="lg"
                placeholder="Name..."
                className=" !border-t-white-200 text-white focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="white" className="-mb-3">
                Your Email
              </Typography>
              <Input
                type="email"
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-white-200 text-white focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="white" className="-mb-3">
                Password
              </Typography>
              <Input
                type="password"
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 text-white focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <Button
              className="mt-6 text-xl font-semibold bg-[#5ad5d8]"
              fullWidth
            >
              sign up
            </Button>
          </form>
        </div>
      </Card>
    </section>
  );
}

export default SignIn;
