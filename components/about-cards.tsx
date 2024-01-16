import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutCards = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="grid grid-cols-2 gap-4 opacity-100 group p-4">
        <Card id="card" className="h-56 shadow-md shadow-slate-300 overflow-hidden -rotate-3 even:mb-4 hover:rotate-0 hover:scale-110 [&:not(:hover)]:group-hover:opacity-50 transition-all ease-linear duration-150">
          <CardHeader>
            <CardTitle className="text-xl">Web Development</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Proficient in both front-end and back-end development, capable of
              creating end-to-end solutions.
            </p>
          </CardContent>
        </Card>

        <Card id="card" className="h-56 shadow-md shadow-slate-300 overflow-hidden -rotate-3 even:mb-4 hover:rotate-0 hover:scale-110 [&:not(:hover)]:group-hover:opacity-50 transition-all ease-linear duration-150">
          <CardHeader>
            <CardTitle className="text-xl">Code Quality</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Emphasizing clean, maintainable, and efficient code for long-term
              sustainability.
            </p>
          </CardContent>
        </Card>

        <Card id="card" className="h-56 shadow-md shadow-slate-300 overflow-hidden -rotate-3 even:mb-4 hover:rotate-0 hover:scale-110 [&:not(:hover)]:group-hover:opacity-50 transition-all ease-linear duration-150">
          <CardHeader>
            <CardTitle className="text-xl">Responsive Design</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Crafting adaptable websites for seamless user experiences on any
              device.
            </p>
          </CardContent>
        </Card>

        <Card id="card" className="h-56 shadow-md shadow-slate-300 overflow-hidden -rotate-3 even:mb-4 hover:rotate-0 hover:scale-110 [&:not(:hover)]:group-hover:opacity-50 transition-all ease-linear duration-150">
          <CardHeader>
            <CardTitle className="text-xl">Problem Solving</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Adept at identifying and solving complex problems to deliver
              effective and efficient solutions.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutCards;
