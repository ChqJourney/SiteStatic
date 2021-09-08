import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { Head } from './layouts/head';

function App() {
  return (
    <Switch>
      <Route path="/home">
        <div>home</div>
      </Route>
      <Route path="/">
        <Head/>
        <div className="container px-5 mx-auto flex flex-wrap">
          <div className="w-full md:w-2/3 flex flex-col">
            <div className="text-5xl font-bold my-2.5 text-center md:text-left">We are making thing simpler...build best tools for you.</div>
            <div className="text-1xl font-light text-center md:text-left my-4">nine4 is a free to use website template for websites made with Next.js and styled with Tailwind CSS</div>
            <button className="abtn-black">Find out more</button>
          </div>
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <img alt="" width="200" src="https://nine4-2.vercel.app/images/iPhone-12-Mockup.png" />
          </div>

        </div>

      </Route>
    </Switch>
  );
}

export default App;
