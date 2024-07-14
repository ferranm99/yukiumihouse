"use client";
import React from "react";
import Image from "next/image";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ContactUsSchema } from "@/schemas";

const ContactPage: React.FC = () => {
  const form = useForm<z.infer<typeof ContactUsSchema>>({
    resolver: zodResolver(ContactUsSchema),
  });
  return (
    <div className="flex flex-col my-6 gap-10">
      <section className="pt-8 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-black pb-8 ">Who Are We?</h1>
        <div className="flex gap-12">
          <Card className="w-[40rem] h-[47rem] border-[1px] shadow-md">
            <CardHeader className="flex flex-col gap-3 items-center justify-center mx-28 rounded-t-xl pt-4 h-[57%]">
              <div className="w-[87%] h-full overflow-hidden rounded-t-xl">
                <Image
                  src="https://yukiumihouse.files.wordpress.com/2023/04/sergi-1.png"
                  alt="Sergi Martinez"
                  layout="responsive"
                  width={20}
                  height={20}
                />
              </div>
              <CardTitle className="text-2xl">Sergi Martínez</CardTitle>
              <hr className="w-full border-gray-300" />
            </CardHeader>
            <CardContent className="px-14">
              Sergi is a POW rider. Usually on his board, he loves to ride deep
              powder snow. Eider spinning laps in the resort or taking you to
              the untouched backcountry terrain, you will have a blast joining
              him for a day. He will be caring about you, sharing some great
              tips on splitboard science, and last but not least, setting up
              high riding skills that are going to empower you to overcome your
              boundaries. Operations Level 1 by Canadian avalanche association
              and Japanese avalanche Network, ski and snowboard instructor,
              kitesurfer and drone pilot. If you are a snow surfer and you are
              looking for a great day out in the Furano area or central Hokkaido
              don’t miss a day with Sergi.
            </CardContent>
          </Card>
          <Card className="w-[40rem] h-[47rem] border-[1px] shadow-md">
            <CardHeader className="flex flex-col gap-3 items-center justify-center mx-28 rounded-t-xl pt-4 h-[57%]">
              <div className="w-[87%] h-full overflow-hidden rounded-t-xl">
                <Image
                  src="https://yukiumihouse.files.wordpress.com/2023/04/geri-copia.png"
                  alt="Gerard Martinez"
                  layout="responsive"
                  width={20}
                  height={20}
                />
              </div>
              <CardTitle className="text-2xl">Gerard Martínez</CardTitle>
              <hr className="w-full border-gray-300" />
            </CardHeader>
            <CardContent className="px-14">
              Gerard is a mountain lover and over all, a ski geek. He likes to
              go out for long days, push the vertical gain in the backcountry
              and summit some special mountains. He will always be talking about
              unridden lines and project lines. He will make sure things are
              going alright, giving you confidence and also the responsibilities
              and autonomy. He will help you to go further and get you to
              accomplish your ski dreams. Operations Level 1 by Canadian
              avalanche association and Japanese avalanche Network, ski
              instructor, surfer, trail runner, agriculture engineer and cook.
              If you are looking for an adventure day in Central Hokkaido,
              tailor made for you, based on your skills and desires don’t miss
              to hit him out as he is your guide!
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="pt-8 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-black pb-8 ">
          Ask Us Anything!
        </h1>
        <Form {...form}>
          <form
            action="https://formsubmit.co/yukiumihouse@gmail.com"
            method="POST"
            target="_parent"
            className="p-4 space-y-6 w-[30%]"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your name *</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Your name"
                      required
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email *</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="example@example.com"
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <FormControl>
                      <textarea
                        {...field}
                        placeholder="Your message here..."
                        className="p-2 border rounded w-full text-sm"
                        required
                        rows={15}
                      />
                    </FormControl>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <button
                type="submit"
                className="ml-2 bg-orange-500 text-white p-2 rounded hover:bg-orange-600"
              >
                Submit
              </button>
            </div>
          </form>
        </Form>
      </section>
      <section>
        <h1 className="text-4xl font-bold text-black pb-8 text-center">
          You can also contact us through our social media!
        </h1>
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex justify-center items-center w-full h-full">
            <a
              href="https://www.instagram.com/yukiumi_house/"
              target="_blank"
              className="hover:opacity-85 ms-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0 0 48 48"
              >
                <radialGradient
                  id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
                  cx="19.38"
                  cy="42.035"
                  r="44.899"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#fd5"></stop>
                  <stop offset=".328" stop-color="#ff543f"></stop>
                  <stop offset=".348" stop-color="#fc5245"></stop>
                  <stop offset=".504" stop-color="#e64771"></stop>
                  <stop offset=".643" stop-color="#d53e91"></stop>
                  <stop offset=".761" stop-color="#cc39a4"></stop>
                  <stop offset=".841" stop-color="#c837ab"></stop>
                </radialGradient>
                <path
                  fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
                  d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                ></path>
                <radialGradient
                  id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
                  cx="11.786"
                  cy="5.54"
                  r="29.813"
                  gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#4168c9"></stop>
                  <stop
                    offset=".999"
                    stop-color="#4168c9"
                    stop-opacity="0"
                  ></stop>
                </radialGradient>
                <path
                  fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
                  d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                ></path>
                <path
                  fill="#fff"
                  d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                ></path>
                <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
                <path
                  fill="#fff"
                  d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                ></path>
              </svg>
              <span className="sr-only">Instagram account</span>
            </a>
            <a
              href="https://t.me/@Gerarddmc13"
              target="_blank"
              className="text-blue-500 hover:opacity-85 ms-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                width="50"
                height="50"
                viewBox="0 0 32 32"
              >
                <path d="M16,4C9.37,4,4,9.37,4,16s5.37,12,12,12s12-5.37,12-12S22.63,4,16,4z M18.852,21.859c-1.162-0.217-2.638-1.108-3.622-2.468 c-0.296-0.409-0.23-0.979,0.14-1.321l2.062-1.901c0.406-0.374,0.432-1.007,0.058-1.413s-1.006-0.431-1.413-0.058l-3.16,2.913 c-0.171,0.157-0.396,0.256-0.628,0.267c-1.166,0.058-2.118-0.074-2.876-0.508c-0.545-0.312-0.676-1.063-0.254-1.528 c2.31-2.547,7.461-5.014,11.856-4.891c0.474,0.013,0.875,0.384,0.929,0.855c0.306,2.664-0.675,7.774-2.135,9.69 C19.587,21.788,19.215,21.927,18.852,21.859z"></path>
              </svg>
              <span className="sr-only">Telegram account</span>
            </a>

            <a
              href="https://wa.me/34"
              target="_blank"
              className="text-green-500 hover:opacity-85 ms-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                width="50"
                height="50"
                viewBox="0 0 30 30"
              >
                <path d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z"></path>
              </svg>
              <span className="sr-only">Whatsapp account</span>
            </a>
          </div>
          <div className="flex items-center gap-6 w-full px-60 h-full">
            <iframe
              className="instagram-media instagram-media-rendered"
              id="instagram-embed-0"
              src="https://www.instagram.com/reel/Cu_D-2Jrm2N/embed/?cr=1&amp;v=14&amp;wp=326&amp;rd=https%3A%2F%2Fyukiumihouse.com&amp;rp=%2Fcontact.html#%7B%22ci%22%3A0%2C%22os%22%3A563%2C%22ls%22%3A216%2C%22le%22%3A557%7D"
              height="616"
              data-instgrm-payload-id="instagram-media-payload-0"
              scrolling="no"
              style={{
                background: "white",
                maxWidth: "540px",
                width: "calc(100% - 2px)",
                borderRadius: "12px",
                border: "1px solid rgb(219, 219, 219)",
                boxShadow: "none",
                display: "block",
                margin: "0px 0px 12px",
                // minWidth: "326px",
                padding: "0px",
              }}
            ></iframe>
            <iframe
              className="instagram-media instagram-media-rendered"
              id="instagram-embed-0"
              src="https://www.instagram.com/reel/CsjR6A2s-sz/embed/?cr=1&v=14&wp=326&rd=https%3A%2F%2Fyukiumihouse.com&rp=%2Fcontact.html#%7B%22ci%22%3A1%2C%22os%22%3A565%2C%22ls%22%3A216%2C%22le%22%3A557%7D"
              height="616"
              data-instgrm-payload-id="instagram-media-payload-0"
              scrolling="no"
              style={{
                background: "white",
                maxWidth: "540px",
                width: "calc(100% - 2px)",
                borderRadius: "12px",
                border: "1px solid rgb(219, 219, 219)",
                boxShadow: "none",
                display: "block",
                margin: "0px 0px 12px",
                // minWidth: "326px",
                padding: "0px",
              }}
            ></iframe>
            <iframe
              className="instagram-media instagram-media-rendered"
              id="instagram-embed-0"
              src="https://www.instagram.com/reel/Ct2tSbBAvH2/embed/?cr=1&v=14&wp=326&rd=https%3A%2F%2Fyukiumihouse.com&rp=%2Fcontact.html#%7B%22ci%22%3A3%2C%22os%22%3A1498%2C%22ls%22%3A216%2C%22le%22%3A557%7D"
              height="616"
              data-instgrm-payload-id="instagram-media-payload-0"
              scrolling="no"
              style={{
                background: "white",
                maxWidth: "540px",
                width: "calc(100% - 2px)",
                borderRadius: "12px",
                border: "1px solid rgb(219, 219, 219)",
                boxShadow: "none",
                display: "block",
                margin: "0px 0px 12px",
                // minWidth: "326px",
                padding: "0px",
              }}
            ></iframe>
            <iframe
              className="instagram-media instagram-media-rendered"
              id="instagram-embed-0"
              src="https://www.instagram.com/reel/CuGIjLTuOiK/embed/?cr=1&v=14&wp=326&rd=https%3A%2F%2Fyukiumihouse.com&rp=%2Fcontact.html#%7B%22ci%22%3A5%2C%22os%22%3A1510%2C%22ls%22%3A216%2C%22le%22%3A557%7D"
              height="616"
              data-instgrm-payload-id="instagram-media-payload-0"
              scrolling="no"
              style={{
                background: "white",
                maxWidth: "540px",
                width: "calc(100% - 2px)",
                borderRadius: "12px",
                border: "1px solid rgb(219, 219, 219)",
                boxShadow: "none",
                display: "block",
                margin: "0px 0px 12px",
                // minWidth: "326px",
                padding: "0px",
              }}
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
