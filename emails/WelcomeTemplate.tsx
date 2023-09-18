import React, { CSSProperties } from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Tailwind,
  Preview,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview> Welcome aboard</Preview>
      <Tailwind>
         <Body className="bg-white">
        <Container>
          <Text className="font-bold text-3xl">Hello {name}</Text>
          <Link href="https://github.com/tolu0jo">My Github page</Link>
        </Container>
      </Body>
      </Tailwind>
     
    </Html>
  );
};

export default WelcomeTemplate;

const body : CSSProperties={
background: "#fff"
}
const heading:CSSProperties={
  fontSize:"32px"  
}