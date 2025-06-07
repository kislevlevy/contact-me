import { cn } from "./lib/utils";
import QRCode from "react-qr-code";

import data from "./utils/config";
import { getIconByName, iconNames } from "./utils/iconMap";

import { Separator } from "./components/ui/separator";
import Icon from "@mdi/react";

import {
  mdiGithub,
  mdiLinkedin,
  mdiQrcodeScan,
  mdiWeatherNight,
  mdiWeatherSunny,
  mdiWeb,
  mdiWhatsapp,
} from "@mdi/js";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import { Card, CardContent, CardHeader } from "./components/ui/card";
import { IconCloud } from "./components/magicui/icon-cloud";
import { Dock, DockIcon } from "./components/magicui/dock";
import { AnimatedGridPattern } from "./components/magicui/animated-grid-pattern";
import { useTheme } from "./lib/theme-provider";

export default function App() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="p-5">
      <Card className="max-w-sm m-auto pb-16">
        <CardHeader className="flex flex-row items-center w-full">
          <img src="/me.jpg" className="object-cover w-1/2 rounded-full" />
          <div className="ml-5">
            <h1 className="font-bold text-2xl">{data.name}</h1>
            <h2>{data.role}</h2>
          </div>
        </CardHeader>
        <CardContent className="my-3 space-y-3 ">
          <div className="space-y-1 flex flex-col items-center">
            <div
              className={cn(
                "p-2 rounded-lg flex justify-between w-full",
                theme === "dark"
                  ? "hover:bg-gray-800 bg-gray-900"
                  : "hover:bg-slate-200 bg-slate-100"
              )}
            >
              <p>Phone</p>
              <a className="text-blue-500" href={"tel:" + data.phone}>
                +{data.phone}
              </a>
            </div>
            <div
              className={cn(
                "p-2 rounded-lg flex justify-between w-full",
                theme === "dark"
                  ? "hover:bg-gray-800 bg-gray-900"
                  : "hover:bg-slate-200 bg-slate-100"
              )}
            >
              <p>Email</p>
              <a className="text-blue-500" href={"mailto:" + data.email}>
                {data.email}
              </a>
            </div>
          </div>
          <div
            className={cn(
              "relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg",
              theme === "dark" && "bg-gray-800"
            )}
          >
            <IconCloud
              icons={iconNames
                .map((iconName) => {
                  const IconComponent = getIconByName(iconName);
                  return IconComponent ? (
                    <IconComponent key={iconName} size={75} />
                  ) : null;
                })
                .filter(Boolean)}
            />
          </div>
          <Dock
            className="fixed bottom-10 left-0 right-0"
            direction="bottom"
            iconMagnification={50}
            iconDistance={140}
          >
            <DockIcon>
              <Dialog>
                <DialogTrigger asChild>
                  <Icon path={mdiQrcodeScan} size={1} />
                </DialogTrigger>
                <DialogContent className="w-fit dark rounded-lg">
                  <DialogHeader>
                    <DialogTitle
                      className={cn(
                        theme === "dark" ? "text-[#fafafa]" : "text-[#09090b]",
                        "text-left"
                      )}
                    >
                      Share digital business card:
                    </DialogTitle>
                    <DialogDescription></DialogDescription>
                  </DialogHeader>
                  <div className="flex items-center justify-center space-x-2 mt-2">
                    <QRCode
                      value={window.location.href}
                      size={300}
                      level="H"
                      aria-description=""
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </DockIcon>
            <Separator orientation="vertical" className="h-full py-2" />
            <DockIcon>
              <div onClick={() => window.open(data.links.linkedin, "_blank")}>
                <Icon path={mdiLinkedin} size={1} />
              </div>
            </DockIcon>
            <DockIcon>
              <div onClick={() => window.open(data.links.github, "_blank")}>
                <Icon path={mdiGithub} size={1} />
              </div>
            </DockIcon>
            <DockIcon>
              <div onClick={() => window.open(data.links.website, "_blank")}>
                <Icon path={mdiWeb} size={1} />
              </div>
            </DockIcon>
            <DockIcon>
              <div
                onClick={() =>
                  window.open(
                    "https://api.whatsapp.com/send?phone=" + data.phone,
                    "_blank"
                  )
                }
              >
                <Icon path={mdiWhatsapp} size={1} />
              </div>
            </DockIcon>
            <Separator orientation="vertical" className="h-full py-2" />
            <DockIcon>
              <div
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <Icon
                  path={theme === "dark" ? mdiWeatherNight : mdiWeatherSunny}
                  size={1}
                />
              </div>
            </DockIcon>
          </Dock>
        </CardContent>
      </Card>

      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[100%] skew-y-12 -z-10"
        )}
      />
    </div>
  );
}
