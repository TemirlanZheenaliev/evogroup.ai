'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { solutions } from '@/lib/data'
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/Card'
import { Icon } from '@/components/ui/Icon'
import { Button } from '@/components/ui/Button'

const Solutions: React.FC = () => {
  const [selectedSolution, setSelectedSolution] = useState<string | null>(null)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  }

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string, text: string, border: string }> = {
      blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
      green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200' },
      purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200' },
      orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200' },
    }
    return colors[color] || colors.blue
  }

  return (
    <section id="solutions" className="py-20 bg-white relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-100 to-blue-100 rounded-full blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            Наши ИИ-решения
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Комплексные решения на основе искусственного интеллекта для автоматизации 
            и оптимизации бизнес-процессов в различных отраслях
          </p>
        </motion.div>

        {/* Solutions grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {solutions.map((solution) => {
            const colorClasses = getColorClasses(solution.color)
            const isHovered = hoveredCard === solution.id
            const isSelected = selectedSolution === solution.id

            return (
              <motion.div
                key={solution.id}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onHoverStart={() => setHoveredCard(solution.id)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <Card 
                  variant="hover" 
                  className={`h-full cursor-pointer transition-all duration-300 ${
                    isSelected ? 'ring-2 ring-blue-500 shadow-2xl' : ''
                  }`}
                  onClick={() => setSelectedSolution(isSelected ? null : solution.id)}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg ${colorClasses.bg} ${colorClasses.text}`}>
                        <Icon name={solution.icon} size="xl" />
                      </div>
                      <motion.div
                        animate={{ rotate: isHovered ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon name={isSelected ? 'close' : 'arrow-right'} className="text-gray-400" />
                      </motion.div>
                    </div>
                    <CardTitle className="text-xl">{solution.title}</CardTitle>
                    <CardDescription className="text-base mt-2">
                      {solution.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <AnimatePresence>
                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-3"
                        >
                          <div className={`border-t ${colorClasses.border} pt-4`}>
                            <h4 className="font-semibold text-gray-900 mb-3">Ключевые возможности:</h4>
                            <ul className="space-y-2">
                              {solution.features.map((feature, index) => (
                                <motion.li
                                  key={index}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.1 }}
                                  className="flex items-start space-x-2"
                                >
                                  <Icon name="check" className={`${colorClasses.text} mt-0.5`} />
                                  <span className="text-sm text-gray-700">{feature}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                          
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className={`w-full mt-4 ${colorClasses.text} ${colorClasses.border} hover:${colorClasses.bg}`}
                          >
                            Подробнее о решении
                          </Button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">
            Не нашли подходящее решение?
          </h3>
          <p className="text-lg mb-6 text-white/90">
            Мы разрабатываем индивидуальные ИИ-решения под уникальные задачи вашего бизнеса
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Icon name="phone" className="mr-2" />
              Обсудить проект
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Icon name="document" className="mr-2" />
              Скачать каталог решений
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Solutions