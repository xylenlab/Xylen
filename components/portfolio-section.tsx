"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function PortfolioSection() {
  const { t } = useLanguage()

  const portfolioItems = [
    {
      title: "Social Media Campaign",
      category: "Social Media",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Corporate Website",
      category: "Web Development",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Product Video",
      category: "Audiovisual",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Brand Identity",
      category: "Social Media",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("portfolio.title")}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{t("portfolio.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
                <p className="text-gray-300">{item.category}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            {t("portfolio.viewMore")}
          </Button>
        </div>
      </div>
    </section>
  )
}
