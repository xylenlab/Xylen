"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Instagram, Globe, Video } from "lucide-react"

export function ServicesSection() {
  const { t } = useLanguage()

  const services = [
    {
      icon: <Instagram className="h-10 w-10 text-purple-600" />,
      title: t("services.social.title"),
      description: t("services.social.description"),
    },
    {
      icon: <Globe className="h-10 w-10 text-cyan-600" />,
      title: t("services.web.title"),
      description: t("services.web.description"),
    },
    {
      icon: <Video className="h-10 w-10 text-pink-600" />,
      title: t("services.av.title"),
      description: t("services.av.description"),
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("services.title")}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{t("services.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full transition-all hover:shadow-lg">
                <CardHeader className="flex flex-col items-center text-center">
                  {service.icon}
                  <CardTitle className="mt-4 text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
