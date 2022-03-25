import React from "react"
import Head from "next/head"
import Form from "./form"
import Preview from "./preview"

const Main = () => {
  return (
    <>
      <Head>
        <title>Sprix - Resume Builder</title>
        <meta
          name="descrition"
          content="Sprix is a resume builder based on templates for software engineer / computer science positions."
        />
      </Head>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-extrabold text-3xl">Welcome to Sprix!</h1>
        <p className="p-4 text-lg">
          Sprix is a resume builder based on templates for software engineer /
          computer science positions.
        </p>
      </div>
      <div className="flex justify-evenly">
        <Form />
        <Preview />
      </div>
    </>
  )
}

export default Main
