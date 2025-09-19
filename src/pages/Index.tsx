import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Icon from '@/components/ui/icon'

function Index() {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false)

  const services = [
    {
      title: 'Терапия',
      description: 'Общая терапия и профилактика заболеваний',
      icon: 'Stethoscope'
    },
    {
      title: 'Кардиология',
      description: 'Диагностика и лечение сердечно-сосудистых заболеваний',
      icon: 'Heart'
    },
    {
      title: 'Неврология',
      description: 'Лечение заболеваний нервной системы',
      icon: 'Brain'
    },
    {
      title: 'Педиатрия',
      description: 'Медицинская помощь детям и подросткам',
      icon: 'Baby'
    },
    {
      title: 'Лабораторная диагностика',
      description: 'Полный спектр лабораторных исследований',
      icon: 'TestTube'
    },
    {
      title: 'УЗИ диагностика',
      description: 'Ультразвуковые исследования органов',
      icon: 'ScanEye'
    }
  ]

  const doctors = [
    {
      name: 'Петрова Елена Владимировна',
      specialty: 'Врач-терапевт',
      experience: '15 лет опыта',
      education: 'Саратовский ГМУ',
      image: '/img/68432608-c37d-410a-b312-934ac1ba25ea.jpg'
    },
    {
      name: 'Иванов Сергей Александрович',
      specialty: 'Врач-кардиолог',
      experience: '12 лет опыта',
      education: 'РНИМУ им. Пирогова',
      image: '/img/68432608-c37d-410a-b312-934ac1ba25ea.jpg'
    },
    {
      name: 'Смирнова Ольга Петровна',
      specialty: 'Врач-педиатр',
      experience: '8 лет опыта',
      education: 'СПбГПМУ',
      image: '/img/68432608-c37d-410a-b312-934ac1ba25ea.jpg'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Cross" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Центр здоровья</h1>
                <p className="text-sm text-gray-600">ООО "Центр здоровья"</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>
              <a href="#doctors" className="text-gray-700 hover:text-primary transition-colors">Врачи</a>
              <a href="#contacts" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
              <a href="#licenses" className="text-gray-700 hover:text-primary transition-colors">Лицензии</a>
            </nav>
            <Dialog open={isAppointmentOpen} onOpenChange={setIsAppointmentOpen}>
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90">
                  <Icon name="Calendar" className="mr-2" size={16} />
                  Записаться на прием
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Запись на прием</DialogTitle>
                  <DialogDescription>
                    Заполните форму, и мы свяжемся с вами для подтверждения записи
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">ФИО</Label>
                    <Input id="name" placeholder="Введите ваше полное имя" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="doctor">Врач</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите врача" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="petrova">Петрова Е.В. - Терапевт</SelectItem>
                        <SelectItem value="ivanov">Иванов С.А. - Кардиолог</SelectItem>
                        <SelectItem value="smirnova">Смирнова О.П. - Педиатр</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">Комментарий</Label>
                    <Textarea id="message" placeholder="Опишите ваши жалобы или пожелания" />
                  </div>
                </div>
                <div className="flex justify-end gap-3">
                  <Button variant="outline" onClick={() => setIsAppointmentOpen(false)}>
                    Отмена
                  </Button>
                  <Button onClick={() => setIsAppointmentOpen(false)}>
                    Отправить заявку
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Забота о вашем здоровье — наша главная задача
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Медицинский центр "Центр здоровья" в Красноармейске предоставляет качественные медицинские услуги с использованием современного оборудования и передовых методов лечения.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Dialog open={isAppointmentOpen} onOpenChange={setIsAppointmentOpen}>
                  <DialogTrigger asChild>
                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                      <Icon name="Calendar" className="mr-2" size={20} />
                      Записаться на прием
                    </Button>
                  </DialogTrigger>
                </Dialog>
                <Button variant="outline" size="lg">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Позвонить сейчас
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/2eca8340-30cf-4e58-846b-e03dfeb50fb4.jpg"
                alt="Медицинский центр"
                className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600">Комплексная медицинская помощь для всей семьи</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши врачи</h2>
            <p className="text-xl text-gray-600">Опытные специалисты с высшим медицинским образованием</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <img 
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-xl">{doctor.name}</CardTitle>
                  <CardDescription>
                    <Badge variant="secondary" className="mb-2">{doctor.specialty}</Badge>
                    <p className="text-gray-600">{doctor.experience}</p>
                    <p className="text-sm text-gray-500">{doctor.education}</p>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Dialog open={isAppointmentOpen} onOpenChange={setIsAppointmentOpen}>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full">
                        <Icon name="Calendar" className="mr-2" size={16} />
                        Записаться
                      </Button>
                    </DialogTrigger>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts & Licenses Section */}
      <section id="contacts" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Контакты</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" className="text-primary" size={20} />
                  <span>г. Красноармейск, Саратовская область</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="text-primary" size={20} />
                  <span>+7 (845) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" className="text-primary" size={20} />
                  <span>info@centr-zdorovya.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" className="text-primary" size={20} />
                  <div>
                    <p>Пн-Пт: 8:00 - 20:00</p>
                    <p>Сб: 9:00 - 16:00</p>
                    <p>Вс: выходной</p>
                  </div>
                </div>
              </div>
            </div>
            <div id="licenses">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Лицензии и сертификаты</h2>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Icon name="FileCheck" className="text-primary" size={24} />
                      <div>
                        <CardTitle className="text-lg">Лицензия на медицинскую деятельность</CardTitle>
                        <CardDescription>№ ЛО-64-01-003456 от 15.03.2020</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Icon name="Award" className="text-primary" size={24} />
                      <div>
                        <CardTitle className="text-lg">Сертификат качества ISO 9001</CardTitle>
                        <CardDescription>Система менеджмента качества</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Icon name="Shield" className="text-primary" size={24} />
                      <div>
                        <CardTitle className="text-lg">Аккредитация Минздрава</CardTitle>
                        <CardDescription>Действительна до 2025 года</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Cross" className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Центр здоровья</h3>
                  <p className="text-gray-400">ООО "Центр здоровья"</p>
                </div>
              </div>
              <p className="text-gray-400">
                Качественная медицинская помощь в Красноармейске Саратовской области.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Терапия</li>
                <li>Кардиология</li>
                <li>Неврология</li>
                <li>Педиатрия</li>
                <li>Лабораторная диагностика</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>г. Красноармейск, Саратовская область</p>
                <p>+7 (845) 123-45-67</p>
                <p>info@centr-zdorovya.ru</p>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-700" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2024 ООО "Центр здоровья". Все права защищены.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Пользовательское соглашение
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index