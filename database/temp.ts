export const smartphonesForMainScreen = [
	{
		id: 1,
		mainImage: '/static/images/smartphones/iphone11_pro_max.png',
		name: 'iPhone 11',
		subName: 'Max Pro',
		description:
			'Не смотря на цифру 11 в названии, данная модель, по сути, является прямым преемником iPhone XR. Основные отличия кроются в камерах, теперь они сдвоенные (и основная, и фронтальная); в процессоре, который, судя по результатам тестов, стал минимум на 50% мощнее; а также в аккумуляторе большей емкости. Что касается функционала, то, хотя главный упор на фото- и видеосъемку был сделан в моделях 11 Pro и 11 Pro Max, базовый iPhone 11 также получил множество улучшений, касающихся фото и видео. К примеру, появился режим ночной съемки, причем с явно лучшей эффективностью на фоне конкурентов (даже по сравнению с Samsung S10), а также съемка видео в HDR при 60 к/с. Один объектив основной камеры сделан широкоугольным, второй — сверхширокоугольным. Продолжая сравнение с iPhone XR, стоит сказать, что новинка получила влагозащиту по стандарту IP68, и может погружаться под воду до 2 м (предшественник довольствовался 1,5 м). Обновилась палитра цветов корпуса, причем как по составу, так и по насыщенности оттенков; теперь их 6: черный, серебристый, красный, пурпурный, желтый, зеленый. Задняя крышка осталась глянцевой (у 11 Pro и Max она матовая). Логотип Apple переместили в центр этой крышки, надпись iPhone убрали вовсе.'
	},
	{
		id: 2,
		mainImage: '/static/images/smartphones/samsung_s10.png',
		name: 'Samsung',
		subName: 'S10',
		description:
			'В отличии от S9 — крупнее дисплей, при практически тех же габаритах, но убран 3D Touch. Лучше камера (улучшены алгоритмы + матрица). Фронтальная камера снимает видео 2160р (у предшественника 1440р). Более емкий аккумулятор (3400 мАч против 3000 мАч)'
	},
	{
		id: 3,
		mainImage: '/static/images/smartphones/huawei_p40.png',
		name: 'Huawei',
		subName: 'P40',
		description:
			'Дисплей с двумя режимами работы (переключение на более низкое разрешение для экономии заряда). Оптика камеры от Leica.\n' +
			'Отличия от P30 в основном в камере, процессоре и модулях связи. Нет разъема для наушников mini-Jack (3.5 мм).'
	},
	{
		id: 4,
		mainImage: '/static/images/smartphones/xiaomi_redmi_note10.png',
		name: 'Xiaomi',
		subName: 'Redmi Note 10',
		description:
			'«Народный» смартфон из линейки Redmi Note юбилейного десятого поколения. В модели гармонично сочетаются AMOLED-панель в качестве экрана, уравновешенные «железные» комплектующие и долгоиграющий характер. Дисплей гаджета выполнен в размере 6.43 дюймов по диагонали с разрешением картинки FullHD+ (2400х1080 пикселей). Фронтальную камеру вписали в него, проделав под нужды объектива для селфи небольшое круглое отверстие по центру верхней доли. В «нутре» Xiaomi Redmi Note 10 64GB установлен мобильный процессор среднего звена Snapdragon 678, подкреплённый 4 ГБ ОЗУ. Фотографическую сторону вопроса устройства раскрывает основная квадрокамера с большим «глазищем» ведущего датчика изображения на 48 МП. Вопросами энергоснабжения смартфона занята мощная аккумуляторная батарея ёмкостью аккурат 5000 мАч с поддержкой ускоренной 33-ваттной зарядки (до 100 % примерно за 74 мин.). В придачу модель может похвастаться пыле- и влагозащитой корпуса по стандарту IP53, а также боковым дактилоскопическим сканером и ИК-портом. Недостаёт ей разве что NFC-модуля.'
	}
];

export const smartphonesForCarousel = [
	{
		id: 1,
		name: 'iPhone 11 Pro Max',
		priceWithoutSale: 72_990,
		companyProducer: 'Apple',
		feature: 'Новинка',
		image: '/static/images/smartphones/iphone11_pro_max.png',
		sale: 10
	},
	{
		id: 2,
		name: 'Xiaomi redmi note 10',
		priceWithoutSale: 10_990,
		companyProducer: 'Xiaomi',
		feature: 'Лучшая цена',
		image: '/static/images/smartphones/xiaomi_redmi_note10.png',
		sale: 20
	},
	{
		id: 3,
		name: 'Huawei P40',
		priceWithoutSale: 39_990,
		companyProducer: 'Huawei',
		feature: 'Горячее предложение',
		image: '/static/images/smartphones/huawei_p40.png',
		sale: null
	},
	{
		id: 4,
		name: 'Samsung S10',
		priceWithoutSale: 46_990,
		companyProducer: 'Samsung',
		feature: 'Новинка',
		image: '/static/images/smartphones/samsung_s10.png',
		sale: 18
	},
	{
		id: 5,
		name: 'iPhone 11 Pro Max',
		priceWithoutSale: 72_990,
		companyProducer: 'Apple',
		feature: 'Лучшая цена',
		image: '/static/images/smartphones/iphone11_pro_max.png',
		sale: 10
	}
];

export const categories = [
	{
		id: 1,
		image: '/static/images/categories/smartphone-category.png',
		name: 'Смартфоны'
	},
	{
		id: 2,
		image: '/static/images/categories/tablet-category.png',
		name: 'Планшеты'
	},
	{
		id: 3,
		image: '/static/images/categories/accessory-category.png',
		name: 'Аксессуары'
	},
	{
		id: 4,
		image: '/static/images/categories/laptop-category.png',
		name: 'Ноутбуки'
	},
	{
		id: 5,
		image: '/static/images/categories/watch-category.png',
		name: 'Часы'
	},
	{
		id: 6,
		image: '/static/images/categories/headphones-category.png',
		name: 'Наушники'
	}
];
