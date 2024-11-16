'use client'

import { useState } from "react";
import Balancer from "react-wrap-balancer";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import PriceForm from "@/components/forms/subscription";
import { Check, X } from "lucide-react";

const Pricing = () => {
  const [yearlyBilling, setYearlyBilling] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const pricingPlans = [
    {
      id: "basic",
      name: "Basic",
      description: "Level of coverage",
      features: [
        "Ac maintenance  (upto 2 unit)",
        "Washing machine",
        "Electrical repairs",
        "Carpentry",
        "Refrigerator",
        "Plumbing"
      ],
      limitations: [],
      stripePriceId: "",
      prices: {
        monthly: '20,000',
        yearly: '192,000',
      },
      stripeIds: {
        monthly: undefined,
        yearly: undefined,
      },
    },
    {
      id: "standard",
      name: "Standard",
      description: "Level of coverage",
      features: [
        "Ac maintenance  (upto 4 unit)",
        "Washing machine",
        "Electrical repairs",
        "Carpentry",
        "Refrigerator",
        "Plumbing",
        "Pest control",
        "2 extra service/appliance of choice",
      ],
      limitations: [],
      stripePriceId: "",
      prices: {
        monthly: '42,000',
        yearly: '403,200',
      },
      stripeIds: {
        monthly: undefined,
        yearly: undefined,
      },
    },
    {
      id: "premium",
      name: "Premium",
      description: "Level of coverage",
      features: [
        "Basic plan coverage",
        "Standard plan coverage",
        "Desired Add-on service",
      ],
      limitations: [],
      stripePriceId: "",
      prices: {
        monthly: 29,
        yearly: 240,
      },
      stripeIds: {
        monthly: undefined,
        yearly: undefined,
      },
    },
  ];


  return (
    <section id="pricing-section" aria-label="pricing section" className="w-full py-16">
      <div className="container grid max-w-6xl gap-4 md:gap-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-urbanist text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <Balancer>
              HOME WARRANTY COSTS THAT FIT YOUR BUDGET.{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                PLANS THAT FIT YOUR LIFE.
              </span>
            </Balancer>
          </h2>
          <h3 className="max-w-[42rem] text-muted-foreground sm:text-xl sm:leading-8">
            <Balancer>
              The plans have been developed with 100% flexibility, you can have your custom plan depending on the level of coverage you want for your home. Choose your desired plans and flexible pricing that suits you best.
            </Balancer>
          </h3>
        </div>

        <div className="my-4 flex items-center justify-center gap-4 text-lg">
          <span>Monthly</span>
          <Switch
            checked={yearlyBilling}
            onCheckedChange={() => setYearlyBilling((prev) => !prev)}
            role="switch"
            aria-label="switch-year"
          />
          <span>Annual</span>
        </div>

        <div className="grid gap-4 md:grid-cols-3 lg:gap-6">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "flex flex-col transition-all duration-1000 ease-out hover:opacity-80 md:hover:-translate-y-3",
                plan.name === "Standard" &&
                "border-blue-600/60 bg-gradient-to-r from-blue-600/10 to-cyan-400/10"
              )}
            >
              <CardHeader className="overflow-hidden rounded-t-lg bg-gradient-to-r from-blue-600/10 to-cyan-400/10 md:p-2 min-[900px]:p-4 lg:p-6">
                <CardTitle className="font-urbanist text-2xl tracking-wide">
                  <Balancer>{plan.name}</Balancer>
                </CardTitle>

                <CardDescription className="text-sm">
                  <Balancer>{plan.description}</Balancer>
                </CardDescription>

                {plan.name === "Premium" ? (<span className="text-lg font-medium">Cost of premium plans are to be determined after survey.</span>) :
                  (<div className="flex flex-col gap-4 py-2 px-0">
                    <div className="flex items-center gap-2 text-4xl font-semibold md:gap-1 md:text-2xl lg:gap-2 lg:text-4xl">
                      <span className="flex items-center justify-center text-3xl font-normal md:text-lg lg:text-3xl">
                        #
                      </span>
                      <span
                        className={cn(
                          yearlyBilling && "text-muted-foreground/60 line-through text-2xl md:text-lg min-[960px]:text-xl min-[1120px]:text-2xl"
                        )}
                      >
                        {plan.prices.monthly}
                      </span>

                      {yearlyBilling && <span className="text-lg min-[960px]:text-2xl min-[1120px]:text-3xl">{plan.prices.yearly}</span>}

                      {yearlyBilling ? (<span className="flex items-end text-lg font-semibold md:items-center md:text-base lg:items-end lg:text-lg">
                        / year
                      </span>) : (<span className="flex items-end text-lg font-semibold md:items-center md:text-base lg:items-end lg:text-lg">
                        / month
                      </span>)}
                    </div>

                    {yearlyBilling && Number(plan.prices.monthly) > 0 && (
                      <p className="text-xs font-bold text-muted-foreground">
                        <Balancer>
                          You will be charged{" "}
                          <span className="text-foreground">
                            #{plan.prices.yearly}
                          </span>{" "}
                          once a year, starting today
                        </Balancer>
                      </p>
                    )}
                  </div>)}
              </CardHeader>

              <CardContent className="flex flex-1 flex-col justify-between text-sm lg:text-base">
                <div className="grid gap-3 py-8">
                  <ul className="flex flex-col gap-3">
                    {plan.features.map((item) => (
                      <li className="flex items-center gap-2" key={item}>
                        <Check className="h-4 w-4" />
                        <Balancer>{item}</Balancer>
                      </li>
                    ))}
                  </ul>

                  <ul className="flex flex-col gap-2">
                    {plan.limitations.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-muted-foreground"
                      >
                        <X className="h-4 w-4" />
                        <Balancer>{item}</Balancer>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  onClick={handleOpenDialog}
                  variant="outline"
                  className="h-10 w-full border bg-gradient-to-br from-blue-600/20 to-cyan-400/20 font-bold tracking-wide"
                >
                  Subscribe
                </Button>
                <PriceForm
                  open={open}
                  setOpen={setOpen}
                  onClose={() => setOpen(false)}
                  aria-labelledby="dialog-title"
                  aria-describedby="dialog-description"
                  className="fixed inset-0 z-10"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;