import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const AboutCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="grid gap-4 md:pb-24">
                <div>
                    <Card className="h-56 shadow-md">
                        <CardHeader>
                            <CardTitle className='text-xl'>Web Development</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Proficient in both front-end and back-end development, capable of creating end-to-end solutions.</p>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <Card className="h-56 shadow-md">
                        <CardHeader>
                            <CardTitle className='text-xl'>Code Quality</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Emphasizing clean, maintainable, and efficient code for long-term sustainability.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div className="md:pt-24 grid gap-4">
                <div>
                    <Card className="h-56 shadow-md">
                        <CardHeader>
                            <CardTitle className='text-xl'>Responsive Design</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Crafting adaptable websites for seamless user experiences on any device.</p>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <Card className="h-56 shadow-md">
                        <CardHeader>
                            <CardTitle className='text-xl'>Problem Solving</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Adept at identifying and solving complex problems to deliver effective and efficient solutions.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default AboutCards;