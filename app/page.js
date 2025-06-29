"use client";
import ObjectDetection from "@/components/object-detection.js";
import Image from "next/image";
import React, { useState } from "react";

// ...existing code...


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <h1 className="gradient-tittle gradient  font-extrabold text-3xl md:text-6xl lg:text-8xl tracking-tighter md:px-6 text-center">
        Theif Detection Alarm 
      </h1>
      <ObjectDetection/>
    </main>
  );
}
