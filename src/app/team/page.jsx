"use client"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  ButtonGroup,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";

function Team() {
  return (
    <section className='pt-[200px]'>
            <ButtonGroup className="my-[50px]">
        <Button className="bg-[#5ad5d8] font-semibold text-[22px] ">Front end DEv</Button>
        <Button className="bg-[#5ad5d8] font-semibold text-[22px] ">Back end Dev</Button>
        <Button className="bg-[#5ad5d8] font-semibold text-[22px] ">FullStack Dev</Button>
      </ButtonGroup>
    <Card className="w-96">
      <CardHeader floated={false} className="h-80">
        <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          Natalie Paisley
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          CEO / Co-Founder
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Tooltip content="Like">
          <Typography
            as="a"
            href="#facebook"
            variant="lead"
            color="blue"
            textGradient
          >
            <i className="fab fa-facebook" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#twitter"
            variant="lead"
            color="light-blue"
            textGradient
          >
            <i className="fab fa-twitter" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#instagram"
            variant="lead"
            color="purple"
            textGradient
          >
            <i className="fab fa-instagram" />
          </Typography>
        </Tooltip>
      </CardFooter>
    </Card>
    </section>
  )
}

export default Team
