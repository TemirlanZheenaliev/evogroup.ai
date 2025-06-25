'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface ChartProps {
  className?: string
}

// Линейный график роста
export const LineChart: React.FC<ChartProps> = ({ className = '' }) => {
  const data = [
    { x: 0, y: 20 },
    { x: 1, y: 35 },
    { x: 2, y: 25 },
    { x: 3, y: 45 },
    { x: 4, y: 38 },
    { x: 5, y: 52 },
    { x: 6, y: 48 },
    { x: 7, y: 65 },
    { x: 8, y: 72 },
    { x: 9, y: 85 },
  ]

  const pathData = data
    .map((point, index) => {
      const x = (point.x / 9) * 280 + 10
      const y = 90 - (point.y / 100) * 80
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`
    })
    .join(' ')

  return (
    <svg viewBox="0 0 300 100" className={className}>
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      
      {/* Grid lines */}
      {[0, 1, 2, 3, 4].map((i) => (
        <line
          key={i}
          x1="10"
          y1={90 - i * 20}
          x2="290"
          y2={90 - i * 20}
          stroke="#E5E7EB"
          strokeWidth="1"
        />
      ))}
      
      {/* Area under line */}
      <motion.path
        d={`${pathData} L 290 90 L 10 90 Z`}
        fill="url(#lineGradient)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      
      {/* Line */}
      <motion.path
        d={pathData}
        fill="none"
        stroke="#3B82F6"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      
      {/* Data points */}
      {data.map((point, index) => {
        const x = (point.x / 9) * 280 + 10
        const y = 90 - (point.y / 100) * 80
        return (
          <motion.circle
            key={index}
            cx={x}
            cy={y}
            r="4"
            fill="#3B82F6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 + 0.5 }}
          />
        )
      })}
    </svg>
  )
}

// Столбчатая диаграмма
export const BarChart: React.FC<ChartProps> = ({ className = '' }) => {
  const data = [
    { label: 'Q1', value: 65 },
    { label: 'Q2', value: 78 },
    { label: 'Q3', value: 82 },
    { label: 'Q4', value: 92 },
  ]

  return (
    <svg viewBox="0 0 320 140" className={className} preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="barGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
      
      {/* Y-axis labels */}
      {[0, 25, 50, 75, 100].map((value) => (
        <g key={value}>
          <line
            x1="40"
            y1={110 - (value / 100) * 90}
            x2="300"
            y2={110 - (value / 100) * 90}
            stroke="#E5E7EB"
            strokeWidth="1"
            strokeDasharray="2 4"
          />
          <text
            x="30"
            y={115 - (value / 100) * 90}
            textAnchor="end"
            className="text-[10px] fill-gray-500"
          >
            {value}%
          </text>
        </g>
      ))}
      
      {data.map((item, index) => {
        const barWidth = 50
        const barHeight = (item.value / 100) * 90
        const x = 50 + index * 65
        const y = 110 - barHeight
        
        return (
          <g key={index}>
            <motion.rect
              x={x}
              y={y}
              width={barWidth}
              height={barHeight}
              fill="url(#barGradient)"
              rx="4"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              style={{ transformOrigin: 'bottom' }}
            />
            <text
              x={x + barWidth / 2}
              y="125"
              textAnchor="middle"
              className="text-xs font-medium fill-gray-700"
            >
              {item.label}
            </text>
            <motion.text
              x={x + barWidth / 2}
              y={y - 5}
              textAnchor="middle"
              className="text-sm font-bold fill-gray-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              {item.value}%
            </motion.text>
          </g>
        )
      })}
    </svg>
  )
}

// Круговая диаграмма
export const PieChart: React.FC<ChartProps> = ({ className = '' }) => {
  const data = [
    { label: 'Эффективно', value: 75, color: '#3B82F6' },
    { label: 'В процессе', value: 20, color: '#8B5CF6' },
    { label: 'Ожидается', value: 5, color: '#EC4899' },
  ]

  let cumulativePercentage = 0

  return (
    <svg viewBox="0 0 200 200" className={className} preserveAspectRatio="xMidYMid meet">
      {data.map((slice, index) => {
        const startAngle = (cumulativePercentage * 360) / 100
        const endAngle = ((cumulativePercentage + slice.value) * 360) / 100
        cumulativePercentage += slice.value

        const startAngleRad = (startAngle * Math.PI) / 180
        const endAngleRad = (endAngle * Math.PI) / 180

        const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0

        const x1 = 100 + 80 * Math.cos(startAngleRad)
        const y1 = 100 + 80 * Math.sin(startAngleRad)
        const x2 = 100 + 80 * Math.cos(endAngleRad)
        const y2 = 100 + 80 * Math.sin(endAngleRad)

        const pathData = [
          `M 100 100`,
          `L ${x1} ${y1}`,
          `A 80 80 0 ${largeArcFlag} 1 ${x2} ${y2}`,
          'Z',
        ].join(' ')

        return (
          <motion.path
            key={index}
            d={pathData}
            fill={slice.color}
            stroke="white"
            strokeWidth="2"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            style={{ transformOrigin: 'center' }}
          />
        )
      })}
      
      {/* Center circle */}
      <circle cx="100" cy="100" r="40" fill="white" />
      <text x="100" y="100" textAnchor="middle" className="text-2xl font-bold fill-gray-800">
        75%
      </text>
      <text x="100" y="115" textAnchor="middle" className="text-xs fill-gray-600">
        эффективность
      </text>
    </svg>
  )
}

// Тепловая карта активности
export const HeatMap: React.FC<ChartProps> = ({ className = '' }) => {
  const days = 30
  const hours = 24
  const cellSize = 8
  const gap = 1

  const generateHeatmapData = () => {
    const data = []
    for (let d = 0; d < days; d++) {
      for (let h = 0; h < hours; h++) {
        const value = Math.random() * 100
        data.push({ day: d, hour: h, value })
      }
    }
    return data
  }

  const heatmapData = generateHeatmapData()

  const getColor = (value: number) => {
    if (value < 20) return '#E0E7FF'
    if (value < 40) return '#C7D2FE'
    if (value < 60) return '#A5B4FC'
    if (value < 80) return '#818CF8'
    return '#6366F1'
  }

  return (
    <svg 
      viewBox={`0 0 ${days * (cellSize + gap)} ${hours * (cellSize + gap)}`} 
      className={className}
    >
      {heatmapData.map((cell, index) => (
        <motion.rect
          key={index}
          x={cell.day * (cellSize + gap)}
          y={cell.hour * (cellSize + gap)}
          width={cellSize}
          height={cellSize}
          fill={getColor(cell.value)}
          rx="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: Math.random() * 0.5, duration: 0.3 }}
        />
      ))}
    </svg>
  )
}

// Метрика с анимацией
interface MetricProps {
  value: number
  suffix?: string
  label: string
  trend?: 'up' | 'down'
  trendValue?: string
}

export const AnimatedMetric: React.FC<MetricProps> = ({ 
  value, 
  suffix = '', 
  label, 
  trend,
  trendValue 
}) => {
  const [displayValue, setDisplayValue] = React.useState(0)

  React.useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setDisplayValue(value)
        clearInterval(timer)
      } else {
        setDisplayValue(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value])

  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-gray-900">
        {displayValue}{suffix}
      </div>
      <div className="text-sm text-gray-600 mt-1">{label}</div>
      {trend && trendValue && (
        <div className={`text-xs mt-2 font-medium ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
          {trend === 'up' ? '↑' : '↓'} {trendValue}
        </div>
      )}
    </div>
  )
}

// График сравнения показателей
export const ComparisonChart: React.FC<ChartProps> = ({ className = '' }) => {
  const categories = ['Скорость', 'Точность', 'Экономия', 'Масштаб']
  const oldValues = [60, 70, 40, 50]
  const newValues = [95, 98, 85, 90]

  return (
    <svg viewBox="0 0 320 200" className={className} preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="oldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9CA3AF" />
          <stop offset="100%" stopColor="#6B7280" />
        </linearGradient>
        <linearGradient id="newGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      
      {categories.map((category, index) => {
        const y = 30 + index * 40
        const oldWidth = (oldValues[index] / 100) * 180
        const newWidth = (newValues[index] / 100) * 180
        
        return (
          <g key={index}>
            <text x="5" y={y + 5} className="text-sm font-medium fill-gray-700" textAnchor="start">
              {category}
            </text>
            
            {/* Old value bar */}
            <motion.rect
              x="90"
              y={y - 8}
              width={oldWidth}
              height="8"
              fill="url(#oldGradient)"
              rx="4"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              style={{ transformOrigin: 'left' }}
            />
            
            {/* New value bar */}
            <motion.rect
              x="90"
              y={y + 2}
              width={newWidth}
              height="8"
              fill="url(#newGradient)"
              rx="4"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
              style={{ transformOrigin: 'left' }}
            />
            
            {/* Value label */}
            <motion.text
              x={90 + newWidth + 5}
              y={y + 8}
              className="text-xs font-bold fill-blue-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.6 }}
            >
              {newValues[index]}%
            </motion.text>
          </g>
        )
      })}
      
      {/* Legend */}
      <g transform="translate(90, 180)">
        <rect x="0" y="0" width="12" height="8" fill="url(#oldGradient)" rx="2" />
        <text x="16" y="7" className="text-[10px] fill-gray-600">До внедрения</text>
        
        <rect x="90" y="0" width="12" height="8" fill="url(#newGradient)" rx="2" />
        <text x="106" y="7" className="text-[10px] fill-gray-600">После внедрения</text>
      </g>
    </svg>
  )
}

// Радиальный прогресс
export const RadialProgress: React.FC<{ value: number; label: string; className?: string }> = ({ 
  value, 
  label, 
  className = '' 
}) => {
  const radius = 45
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (value / 100) * circumference

  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <defs>
          <linearGradient id="radialGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
        
        {/* Background circle */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="8"
        />
        
        {/* Progress circle */}
        <motion.circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="url(#radialGradient)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform="rotate(-90 60 60)"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        
        {/* Center text */}
        <text x="60" y="55" textAnchor="middle" className="text-2xl font-bold fill-gray-800">
          {value}%
        </text>
        <text x="60" y="72" textAnchor="middle" className="text-xs fill-gray-600">
          {label}
        </text>
      </svg>
    </div>
  )
}

// Real-time метрики
export const RealtimeMetrics: React.FC<ChartProps> = ({ className = '' }) => {
  const [values, setValues] = React.useState([50, 60, 55, 70, 65, 75, 70])
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setValues(prev => {
        const newValues = [...prev.slice(1)]
        newValues.push(Math.floor(Math.random() * 30 + 60))
        return newValues
      })
    }, 1000)
    
    return () => clearInterval(interval)
  }, [])

  const pathData = values
    .map((value, index) => {
      const x = (index / 6) * 280 + 10
      const y = 90 - (value / 100) * 80
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`
    })
    .join(' ')

  return (
    <svg viewBox="0 0 300 120" className={className} preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="realtimeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#10B981" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      
      {/* Grid */}
      {[0, 25, 50, 75, 100].map((value, i) => (
        <line
          key={i}
          x1="10"
          y1={90 - (value / 100) * 80}
          x2="290"
          y2={90 - (value / 100) * 80}
          stroke="#E5E7EB"
          strokeWidth="1"
          strokeDasharray="2 4"
        />
      ))}
      
      {/* Area */}
      <path
        d={`${pathData} L 290 90 L 10 90 Z`}
        fill="url(#realtimeGradient)"
      />
      
      {/* Line */}
      <path
        d={pathData}
        fill="none"
        stroke="#10B981"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Current value */}
      <circle
        cx={290}
        cy={90 - (values[values.length - 1] / 100) * 80}
        r="5"
        fill="#10B981"
        className="animate-pulse"
      />
      
      <text x="150" y="15" textAnchor="middle" className="text-sm font-semibold fill-gray-700">
        Производительность в реальном времени
      </text>
      <text x="290" y="105" textAnchor="end" className="text-[10px] fill-gray-500">
        Сейчас
      </text>
    </svg>
  )
}

// Финансовый дашборд для банка
export const FinancialDashboard: React.FC<ChartProps> = ({ className = '' }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Browser mockup */}
      <div className="bg-gray-200 rounded-t-lg p-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
        </div>
        <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-600">
          analytics.fiscalepro.kg/dashboard
        </div>
      </div>
      
      {/* Dashboard content */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-b-lg">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-white text-lg font-semibold">Financial Analytics Pro</h3>
          <div className="flex items-center gap-2">
            <span className="text-green-400 text-sm flex items-center gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Real-time
            </span>
          </div>
        </div>
        
        {/* Metrics row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-4">
          {[
            { label: 'Доход', value: '₽12.4M', change: '+23%', icon: '📈' },
            { label: 'Транзакции', value: '1.2M', change: '+15%', icon: '💳' },
            { label: 'Клиенты', value: '45.6K', change: '+8%', icon: '👥' },
            { label: 'KPI', value: '94.5%', change: '+12%', icon: '🎯' }
          ].map((metric, i) => (
            <div key={i} className="bg-gray-800/50 rounded-lg p-2 sm:p-3 backdrop-blur border border-gray-700/50">
              <div className="flex items-center justify-between mb-1">
                <p className="text-gray-400 text-[10px] sm:text-xs">{metric.label}</p>
                <span className="text-xs">{metric.icon}</span>
              </div>
              <p className="text-white text-sm sm:text-base font-bold">{metric.value}</p>
              <p className={`text-[10px] sm:text-xs font-medium ${
                metric.change.startsWith('+') ? 'text-green-400' : 'text-red-400'
              }`}>
                {metric.change}
              </p>
            </div>
          ))}
        </div>
        
        {/* Chart area */}
        <div className="bg-gray-800/30 rounded-lg p-4 backdrop-blur">
          <LineChart className="h-40" />
        </div>
      </div>
    </div>
  )
}

// Dashboard Preview компонент
export const DashboardPreview: React.FC<ChartProps> = ({ className = '' }) => {
  return (
    <div className={`bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-xl ${className}`}>
      <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-semibold text-gray-800">Операционная эффективность</h4>
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          </div>
        </div>
        <LineChart className="h-32" />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow-sm p-4">
          <h5 className="text-xs font-medium text-gray-600 mb-2">Квартальный рост</h5>
          <BarChart className="h-24" />
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-4">
          <h5 className="text-xs font-medium text-gray-600 mb-2">Распределение</h5>
          <PieChart className="h-24" />
        </div>
      </div>
    </div>
  )
}