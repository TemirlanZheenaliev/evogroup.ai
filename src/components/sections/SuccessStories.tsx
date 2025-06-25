'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { caseStudies } from '@/lib/data'
import { Card } from '@/components/ui/Card'
import { Icon } from '@/components/ui/Icon'
import { Button } from '@/components/ui/Button'
import { 
  LineChart, 
  BarChart, 
  PieChart, 
  HeatMap, 
  AnimatedMetric,
  DashboardPreview,
  ComparisonChart,
  RadialProgress,
  RealtimeMetrics,
  FinancialDashboard
} from '@/components/charts/Charts'

const SuccessStories: React.FC = () => {
  // Функция для рендеринга визуализаций в зависимости от кейса
  const renderVisualization = (caseId: string, index: number) => {
    switch (caseId) {
      case 'bank':
        // Для банка - финансовый дашборд
        return (
          <div className="w-full h-full flex flex-col justify-center p-4">
            <FinancialDashboard className="w-full mb-6" />
            <div className="grid grid-cols-3 gap-3 mt-4">
              <AnimatedMetric value={156} suffix="%" label="ROI" trend="up" trendValue="+23%" />
              <AnimatedMetric value={2.3} suffix="M" label="Транзакций/день" trend="up" trendValue="+15%" />
              <AnimatedMetric value={99.9} suffix="%" label="Аптайм" trend="up" trendValue="+0.3%" />
            </div>
          </div>
        )
      
      case 'oil':
        // Для нефтяной компании - операционные метрики
        return (
          <div className="w-full h-full flex flex-col justify-center">
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-4">
                Оптимизация производственных процессов
              </h4>
              <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
                <RealtimeMetrics className="h-32" />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <ComparisonChart className="h-40" />
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <div className="grid grid-cols-2 gap-2">
                    <RadialProgress value={94} label="Эффективность" className="h-20" />
                    <RadialProgress value={89} label="Безопасность" className="h-20" />
                  </div>
                  <div className="mt-3 text-center">
                    <AnimatedMetric value={47} suffix="%" label="Снижение простоев" trend="down" trendValue="-47%" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      
      case 'gov':
        // Для госструктуры - статистика и эффективность
        return (
          <div className="w-full h-full flex flex-col justify-center">
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-700 mb-4">
                Статистика обработки обращений
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h5 className="text-xs font-medium text-gray-600 mb-3">Обработка по кварталам</h5>
                  <BarChart className="h-32" />
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h5 className="text-xs font-medium text-gray-600 mb-3">Распределение по типам</h5>
                  <PieChart className="h-32" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <AnimatedMetric value={87} suffix="%" label="Решено в срок" trend="up" trendValue="+12%" />
                <AnimatedMetric value={4.8} suffix="/5" label="Оценка граждан" trend="up" trendValue="+0.3" />
              </div>
            </div>
          </div>
        )
      
      default:
        return <DashboardPreview className="w-full" />
    }
  }

  return (
    <section id="cases" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            Истории успеха
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Реальные кейсы внедрения наших ИИ-решений в различных отраслях
          </p>
        </motion.div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="hover" className="overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-6 sm:p-8 lg:p-12">
                    <div className="mb-4">
                      <span className="text-sm text-blue-600 font-medium">{study.industry}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.title}</h3>
                    <p className="text-gray-600 mb-6">{study.client}</p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Задача:</h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Решение:</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                      {study.results.map((result) => (
                        <div key={result.metric} className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-xl sm:text-2xl font-bold text-blue-600">{result.value}</div>
                          <div className="text-xs text-gray-600">{result.metric}</div>
                        </div>
                      ))}
                    </div>

                    <Button variant="primary" size="sm">
                      <Icon name="document" className="mr-2" />
                      Подробный кейс
                    </Button>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 lg:p-12">
                    {renderVisualization(study.id, index)}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SuccessStories