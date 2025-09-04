import { AwardIcon, CalendarIcon, UsersIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import { 
  FadeUpOnScroll, 
  SlideInFromLeft, 
  SlideInFromRight, 
  StaggerContainer, 
  StaggerItem 
} from "../../components/animations";

const statisticsData = [
  {
    icon: CalendarIcon,
    number: "7 Hari",
    description: "Buka Setiap Hari",
    iconSrc:
      "https://c.animaapp.com/mf5hjq8tGx6ysb/img/solar-calendar-linear.svg",
  },
  {
    icon: UsersIcon,
    number: "500+",
    description: "Pasien Setiap Tahun",
    iconSrc: "https://c.animaapp.com/mf5hjq8tGx6ysb/img/vector-1.svg",
  },
  {
    icon: AwardIcon,
    number: ">10 Tahun",
    description: "Pelayanan Terbaik",
    iconSrc:
      "https://c.animaapp.com/mf5hjq8tGx6ysb/img/frame-9-mdi-medal-outline.svg",
  },
];

const doctorsData = [
  { name: "drg. RIRIS GUSTINA SARI" },
  { name: "drg. FADIZA FADILLAH" },
  { name: "drg. DITYAS ARIA" },
  { name: "drg. VALENCIA LAWRENCE" },
  { name: "drg. ARDILES MARPAUNG" },
];

const testimonialsData = [
  {
    name: "Armando S",
    timeAgo: "a year ago",
    rating: 5,
    review:
      "Senang banget perawatan di sini, pelayanannya ramah. Aku dan keluarga perawatan gigi disini karena nyaman, dan keluhan kita teratasi. Recomended banget buat kamu yg mau perawatan gigi dan gusi",
  },
  {
    name: "Armando S",
    timeAgo: "a year ago",
    rating: 5,
    review:
      "Senang banget perawatan di sini, pelayanannya ramah. Aku dan keluarga perawatan gigi disini karena nyaman, dan keluhan kita teratasi. Recomended banget buat kamu yg mau perawatan gigi dan gusi",
  },
  {
    name: "Armando S",
    timeAgo: "a year ago",
    rating: 5,
    review:
      "Senang banget perawatan di sini, pelayanannya ramah. Aku dan keluarga perawatan gigi disini karena nyaman, dan keluhan kita teratasi. Recomended banget buat kamu yg mau perawatan gigi dan gusi",
  },
  {
    name: "Armando S",
    timeAgo: "a year ago",
    rating: 5,
    review:
      "Senang banget perawatan di sini, pelayanannya ramah. Aku dan keluarga perawatan gigi disini karena nyaman, dan keluhan kita teratasi. Recomended banget buat kamu yg mau perawatan gigi dan gusi",
  },
];

const beforeAfterDots = Array.from({ length: 13 }, (_, i) => i);
const aboutUsDots = Array.from({ length: 4 }, (_, i) => i);
const galleryDots = Array.from({ length: 7 }, (_, i) => i);
const testimonialDots = Array.from({ length: 2 }, (_, i) => i);

const navigationItems = [
  { label: "Tentang Kami", href: "#about" },
  { label: "Layanan", href: "#services" },
  { label: "Dokter", href: "#doctors" },
  { label: "Hasil", href: "#results" },
];

const footerSitemap = [
  { label: "Tentang Kami", href: "#about" },
  { label: "Layanan", href: "#services" },
  { label: "Dokter", href: "#doctors" },
  { label: "Hasil", href: "#results" },
];

export const Homepage = (): JSX.Element => {
  return (
    <div className="bg-white w-full overflow-y-hidden overflow-x-hidden">
      {/* Simple single container */}
        {/* Navigation */}
        <nav className="flex w-full h-[86px] items-center gap-2 md:gap-8 px-4 md:px-[88px] py-2.5 fixed top-0 left-0 bg-white z-50 shadow-sm">
          <div className="flex items-center justify-center gap-2.5 p-2.5 flex-shrink-0">
            <img
              className="h-[59px]"
              alt="Golans Dental Logo"
              src="logo/golanslogo.jpg"
            />
          </div>

          <div className="hidden md:flex items-center gap-4 flex-1">
            {navigationItems.map((item) => (
              <div
                key={item.label}
                className="flex h-[42px] items-center justify-center gap-2.5 p-2.5"
              >
                <a
                  href={item.href}
                  className="[font-family:'Poppins',Helvetica] font-semibold text-[#1e1e1e] text-base text-center tracking-[0] leading-[normal] hover:text-[#7f171e] transition-colors whitespace-nowrap"
                >
                  {item.label}
                </a>
              </div>
            ))}
          </div>

          <Button className="flex w-auto min-w-[180px] h-[46px] items-center justify-center gap-2.5 px-6 md:px-[50px] py-2.5 bg-[#7f171e] rounded-[70px] hover:bg-[#6d1419] transition-colors flex-shrink-0">
            <span className="[font-family:'Poppins',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-[normal]">
              Reservasi
            </span>
          </Button>
        </nav>

        {/* Hero Section */}
        <section 
          className="w-full min-h-screen relative bg-gradient-to-r from-[#7f171e] to-[#a9636d] flex items-center pt-[86px]"
          style={{
            backgroundImage: "url('herobg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay"
          }}
        >
          <div className="w-full px-4 md:px-[88px] grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
            <div className="text-left">
              <h1 className="[font-family:'Poppins',Helvetica] font-semibold text-[#f3eed9] text-6xl tracking-[0] leading-tight mb-6">
                Smile Care for Family
              </h1>
              <p className="[font-family:'Poppins',Helvetica] font-normal text-[#f3eed9] text-xl tracking-[0] leading-relaxed mb-8 max-w-[600px]">
                Nikmati layanan perawatan gigi yang terbaik untuk Anda dan
                Keluarga. Dapatkan perawatan gigi dengan harga terjangkau dan
                berkualitas.
              </p>
              <Button className="flex w-auto min-w-[200px] max-w-[268px] h-[57px] items-center justify-center gap-2.5 px-6 md:px-[50px] py-2.5 bg-[#a9636d] rounded-[70px] hover:bg-[#94576b] transition-colors">
                <span className="[font-family:'Poppins',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
                  Reservasi Sekarang
                </span>
              </Button>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <FadeUpOnScroll>
          <section className="w-full py-16 px-4 md:px-[88px] bg-white">
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {statisticsData.map((stat, index) => (
                <StaggerItem key={index}>
                  <div className="flex flex-col items-center text-center p-8">
                    <img
                      className="w-[120px] h-[120px] mb-6"
                      alt={stat.description}
                      src={stat.iconSrc}
                    />
                    <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-4xl text-center tracking-[0] leading-[normal] mb-4">
                      {stat.number}
                    </h3>
                    <p className="[font-family:'Poppins',Helvetica] font-normal text-black text-lg text-center tracking-[0] leading-[normal]">
                      {stat.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </section>
        </FadeUpOnScroll>

        <div className="w-full border-b-2 border-red-500"></div>

        {/* About Us Section */}
        <section className="w-full py-16 px-4 md:px-[88px] bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <SlideInFromLeft>
                <div className="space-y-6">
                  <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-4xl tracking-[0] leading-[normal]">
                    <span className="text-black">About </span>
                    <span className="text-[#7f171e]">Us</span>
                  </h2>
                  <p className="[font-family:'Poppins',Helvetica] font-normal text-black text-lg text-justify tracking-[0] leading-relaxed">
                    Klinik kami berlokasi di Sunter Mall, Lantai Dasar, Unit 05,
                    Jakarta Utara. Kami buka setiap hari pukul 11.00–20.00 WIB,
                    siap memberikan perawatan gigi terbaik dengan pelayanan
                    profesional dan nyaman bagi seluruh pasien.
                  </p>
                </div>
              </SlideInFromLeft>

              <SlideInFromRight>
                <div className="relative px-12">
                <Carousel className="w-full h-[400px] bg-white overflow-hidden rounded-lg shadow-lg">
                  <CarouselContent className="">
                    <CarouselItem>
                      <img
                        className="w-full h-[400px] object-cover"
                        alt="Clinic Interior 1"
                        src="clinic/clinic1.png"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img
                        className="w-full h-[400px] object-cover"
                        alt="Clinic Interior 2"
                        src="clinic/clinic2.png"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img
                        className="w-full h-[400px] object-cover"
                        alt="Clinic Interior 3"
                        src="clinic/clinic3.png"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img
                        className="w-full h-[400px] object-cover"
                        alt="Video Golans"
                        src="https://c.animaapp.com/mf5hjq8tGx6ysb/img/video-golans.jpg"
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10" />
                  <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10" />
                </Carousel>

                <div className="flex items-center justify-center gap-2 mt-4">
                  {aboutUsDots.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        index === 0 ? "bg-[#a9636d]" : "bg-[#a9636d4c]"
                      }`}
                    />
                  ))}
                </div>
                </div>
              </SlideInFromRight>
            </div>
          </div>
        </section>

        {/* Before and After Section */}
        <FadeUpOnScroll>
          <section className="w-full py-16 bg-[#7f171e]">
            <div className="max-w-6xl mx-auto px-4 md:px-[88px]">
              <FadeUpOnScroll delay={0.2}>
                <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-4xl text-center tracking-[0] leading-[normal] mb-4">
                  <span className="text-white">Before and </span>
                  <span className="text-[#f3eed9]">After</span>
                </h2>

                <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#f3eed9] text-2xl text-center tracking-[0] leading-[normal] mb-12">
                  Hasil Perawatan Gigi Golans Dental
                </h3>
              </FadeUpOnScroll>

            <div className="relative overflow-hidden px-12">
              <Carousel className="w-full overflow-hidden">
                <CarouselContent className="ml-0">
                  {Array.from({ length: 15 }).map((_, index) => (
                    <CarouselItem key={index} className="pr-2 md:pr-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                      <img
                        className="w-full h-64 object-cover rounded-lg"
                        alt={`Before After ${index + 1}`}
                        src={`https://c.animaapp.com/mf5hjq8tGx6ysb/img/before-after-${index + 1}.jpg`}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2" />
                <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2" />
              </Carousel>

              <div className="flex items-center gap-2 justify-center mt-6">
                {beforeAfterDots.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === 0 ? "bg-[#f3eed9]" : "bg-[#f3eed94c]"
                    }`}
                  />
                ))}
              </div>
            </div>

            <FadeUpOnScroll delay={0.4}>
              <div className="flex justify-center mt-8">
                <Button className="flex w-auto min-w-[200px] max-w-[300px] h-[57px] items-center justify-center gap-2.5 px-[50px] py-2.5 bg-[#a9636d] rounded-[70px] hover:bg-[#94576b] transition-colors">
                  <img
                    className="relative w-[21px] h-[21px]"
                    alt="Icon"
                    src="https://c.animaapp.com/mf5hjq8tGx6ysb/img/icon.svg"
                  />
                  <span className="relative [font-family:'Poppins',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-[normal]">
                    Reservasi Sekarang
                  </span>
                </Button>
              </div>
            </FadeUpOnScroll>
          </div>
        </section>
        </FadeUpOnScroll>

        {/* Testimonials Section */}
        <FadeUpOnScroll>
          <section className="w-full py-16 px-4 md:px-[88px] bg-white">
            <div className="max-w-6xl mx-auto">
              <FadeUpOnScroll delay={0.2}>
                <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-4xl text-center tracking-[0] leading-[normal] mb-4">
                  <span className="text-black">Testimoni </span>
                  <span className="text-[#7f171e]">Pasien</span>
                </h2>

                <p className="[font-family:'Poppins',Helvetica] font-normal text-black text-lg text-center tracking-[0] leading-relaxed mb-12 max-w-4xl mx-auto">
                  Cerita nyata pasien tentang pengalaman nyaman dan hasil perawatan
                  gigi terbaik dari kami.
                </p>
              </FadeUpOnScroll>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Google Reviews Card */}
                <SlideInFromLeft delay={0.4}>
                  <Card className="bg-white shadow-lg border border-gray-200">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <img
                      className="w-16 h-16 rounded-full"
                      alt="Golans Dental Logo"
                      src="https://c.animaapp.com/mf5hjq8tGx6ysb/img/golans-dental-logo-small.png"
                    />
                    <div>
                      <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-xl tracking-[0] leading-[normal]">
                        Golans Dental
                      </h3>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#ff8800] text-2xl">
                          5.0
                        </span>
                        <div className="flex gap-1">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <img
                              key={index}
                              className="w-6 h-6"
                              alt="Star"
                              src="https://c.animaapp.com/mf5hjq8tGx6ysb/img/star-5.svg"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="[font-family:'Poppins',Helvetica] text-lg tracking-[0] leading-relaxed mb-6">
                    <span className="font-light text-black">
                      Based on 100+ reviews
                      <br />
                      powered by{" "}
                    </span>
                    <span className="font-semibold text-[#0060cf]">G</span>
                    <span className="font-semibold text-[#dc1313]">o</span>
                    <span className="font-semibold text-[#ff8800]">o</span>
                    <span className="font-semibold text-[#0060cf]">gl</span>
                    <span className="font-semibold text-[#dc1313]">e</span>
                  </p>

                  <Button className="flex items-center justify-center gap-2 px-6 py-3 bg-[#0060cf] rounded-full shadow-md hover:bg-[#0056b8] transition-colors">
                    <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-base">
                      review us on
                    </span>
                    <img
                      className="w-5 h-5"
                      alt="Google Icon"
                      src="https://c.animaapp.com/mf5hjq8tGx6ysb/img/ellipse-15.svg"
                    />
                  </Button>
                </CardContent>
                </Card>
                </SlideInFromLeft>

                {/* Testimonials Carousel */}
                <SlideInFromRight delay={0.6}>
                  <div className="relative overflow-hidden px-12">
                    <Carousel className="w-full overflow-hidden">
                      <CarouselContent className="ml-0">
                        {testimonialsData.map((testimonial, index) => (
                          <CarouselItem key={index}>
                            <Card className="bg-[#f7f7f7] shadow-md border-none mx-auto">
                              <CardContent className="p-6">
                                <div className="flex items-start justify-between mb-4">
                                  <div className="flex items-start gap-4">
                                    <img
                                      className="w-16 h-16 rounded-full object-cover"
                                      alt="Profile"
                                      src={`https://c.animaapp.com/mf5hjq8tGx6ysb/img/testimonial-${index + 1}.jpg`}
                                    />
                                    <div>
                                      <h4 className="[font-family:'Poppins',Helvetica] font-semibold text-[#0060cf] text-lg tracking-[0] leading-[normal]">
                                        {testimonial.name}
                                      </h4>
                                      <p className="[font-family:'Poppins',Helvetica] font-light text-black text-sm tracking-[0] leading-[normal]">
                                        {testimonial.timeAgo}
                                      </p>
                                    </div>
                                  </div>
                                  <img
                                    className="w-8 h-8"
                                    alt="Google Icon"
                                    src="https://c.animaapp.com/mf5hjq8tGx6ysb/img/ellipse-15.svg"
                                  />
                                </div>

                                <div className="flex gap-1 mb-4">
                                  {Array.from({ length: testimonial.rating }).map(
                                    (_, starIndex) => (
                                      <img
                                        key={starIndex}
                                        className="w-5 h-5"
                                        alt="Star"
                                        src="https://c.animaapp.com/mf5hjq8tGx6ysb/img/star-7.svg"
                                      />
                                    ),
                                  )}
                                </div>

                                <p className="[font-family:'Poppins',Helvetica] font-light text-black text-sm tracking-[0] leading-relaxed">
                                  {testimonial.review}
                                </p>
                              </CardContent>
                            </Card>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2" />
                      <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2" />
                    </Carousel>

                    <div className="flex items-center justify-center gap-2 mt-4">
                      {testimonialDots.map((_, index) => (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full ${
                            index === 0 ? "bg-[#003776]" : "bg-[#a6a6a6]"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </SlideInFromRight>
              </div>
            </div>
          </section>
        </FadeUpOnScroll>

        {/* Patient Stories Section */}
        <FadeUpOnScroll>
          <section className="w-full py-16 px-4 md:px-[88px] bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <SlideInFromLeft>
                  <div>
                    <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-4xl tracking-[0] leading-[normal] mb-6">
                      <span className="text-black">Dari Pasien untuk </span>
                      <span className="text-[#7f171e]">Anda</span>
                    </h2>
                    <p className="[font-family:'Poppins',Helvetica] font-normal text-black text-lg text-justify tracking-[0] leading-relaxed">
                      Semua untuk menginspirasi dan meyakinkan Anda bahwa senyum
                      impian juga bisa menjadi milik Anda.
                    </p>
                  </div>
                </SlideInFromLeft>

                <SlideInFromRight>
                  <div>
                    <img
                      className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                      alt="Patient Story"
                      src="https://c.animaapp.com/mf5hjq8tGx6ysb/img/patient-story.jpg"
                    />
                  </div>
                </SlideInFromRight>
              </div>
            </div>
          </section>
        </FadeUpOnScroll>

        {/* Doctors Section */}
        <FadeUpOnScroll>
          <section className="w-full py-16 bg-[#7f171e]">
            <div className="max-w-6xl mx-auto px-4 md:px-[88px]">
              <FadeUpOnScroll delay={0.2}>
                <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-[#f3eed9] text-3xl text-center tracking-[0] leading-[normal] mb-12">
                  Bersama Dokter Andal Kami
                </h2>
              </FadeUpOnScroll>

              <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {doctorsData.map((doctor, index) => (
                  <StaggerItem key={index}>
                    <div className="flex flex-col items-center">
                      <img
                        className="w-32 h-32 rounded-full mb-4 object-cover"
                        alt={`Dr. ${doctor.name}`}
                        src={`https://c.animaapp.com/mf5hjq8tGx6ysb/img/doctor-${index + 1}.jpg`}
                      />
                      <p className="[font-family:'Poppins',Helvetica] font-normal text-[#f3eed9] text-sm text-center tracking-[0] leading-[normal]">
                        {doctor.name}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </section>
        </FadeUpOnScroll>

        {/* Gallery Section */}
        <FadeUpOnScroll>
          <section className="w-full py-16 px-4 md:px-[88px] bg-white">
            <div className="max-w-6xl mx-auto px-12">
              <Carousel className="w-full overflow-hidden">
                <CarouselContent className="ml-0">
                  {Array.from({ length: 9 }).map((_, index) => (
                    <CarouselItem key={index} className="pr-2 md:pr-4 basis-1/2 lg:basis-1/3">
                      <img
                        className="w-full h-64 object-cover rounded-lg shadow-md"
                        alt={`Gallery ${index + 1}`}
                        src={`https://c.animaapp.com/mf5hjq8tGx6ysb/img/gallery-${index + 1}.jpg`}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2" />
                <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2" />
              </Carousel>

              <div className="flex items-center gap-2 justify-center mt-6">
                {galleryDots.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === 0 ? "bg-[#7f171e]" : "bg-[#a9636d4c]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </section>
        </FadeUpOnScroll>

        {/* Footer */}
        <FadeUpOnScroll>
          <footer className="w-full bg-[#7f171e] pt-16">
            <div className="max-w-6xl mx-auto px-4 md:px-[88px]">
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Logo and Location */}
                <StaggerItem className="lg:col-span-2">
                  <div>
                    <img
                      className="w-24 h-24 mb-6"
                      alt="Golans Dental Logo"
                      src="https://c.animaapp.com/mf5hjq8tGx6ysb/img/golans-dental-logo-footer.png"
                    />
                    <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#f3eed9] text-xl tracking-[0] leading-[normal] mb-4">
                      Lokasi
                    </h3>
                    <p className="[font-family:'Poppins',Helvetica] font-normal text-[#f3eed9] text-base leading-relaxed">
                      Sunter Mall, Lt. Dasar , Unit 05, Jl. Danau Sunter Utara
                      No.Kav.II, RT.14/RW.13, Sunter Agung, Kec. Tj. Priok, Jkt
                      Utara, Daerah Khusus Ibukota Jakarta 14350
                    </p>
                  </div>
                </StaggerItem>

                {/* Sitemap */}
                <StaggerItem>
                  <div>
                    <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#f3eed9] text-lg tracking-[0] leading-[normal] mb-4">
                      Sitemap
                    </h3>
                    <nav className="space-y-3">
                      {footerSitemap.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className="block [font-family:'Poppins',Helvetica] font-normal text-[#f3eed9] text-base tracking-[0] leading-[normal] hover:text-white transition-colors"
                        >
                          {item.label}
                        </a>
                      ))}
                    </nav>
                  </div>
                </StaggerItem>

                {/* Operating Hours and Social */}
                <StaggerItem>
                  <div>
                    <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#f3eed9] text-lg tracking-[0] leading-[normal] mb-4">
                      Jam Operasional
                    </h3>
                    <p className="[font-family:'Poppins',Helvetica] font-normal text-[#f3eed9] text-base tracking-[0] leading-[normal] mb-6">
                      Senin-Minggu | 11.00 - 20.00
                    </p>

                    <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#f3eed9] text-lg tracking-[0] leading-[normal] mb-4">
                      Follow Us
                    </h3>
                    <a
                      href="#"
                      className="[font-family:'Poppins',Helvetica] font-normal text-[#f3eed9] text-base tracking-[0] leading-[normal] hover:text-white transition-colors"
                    >
                      Instagram
                    </a>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>

            {/* Copyright Bar */}
            <div className="w-full h-[60px] bg-[#a9636d] flex items-center justify-center bottom-0 mb-0 mt-12">
              <p className="[font-family:'Poppins',Helvetica] font-semibold text-[#f3eed9] text-xl text-center tracking-[0] leading-[normal]">
                © 2025 | Golans Dental | All right reserved
              </p>
            </div>
          </footer>
        </FadeUpOnScroll>
    </div>
  );
};
