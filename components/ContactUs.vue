<template>
	<section class="text-gray-600 body-font relative">
		<div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
			<div
				class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
			>
				<iframe
					width="100%"
					height="100%"
					class="absolute inset-0"
					frameborder="0"
					title="map"
					marginheight="0"
					marginwidth="0"
					scrolling="no"
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d199.3881224106174!2d30.649363!3d36.9092441!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c38e2725bc0a09%3A0xc587127e5a76b149!2sN%C3%B6bet%C3%A7i%20Teknik%20Servisimiz!5e0!3m2!1str!2str!4v1679828068658!5m2!1str!2str"
				></iframe>
				<div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
					<div class="lg:w-1/2 px-6">
						<h2
							class="title-font font-semibold text-gray-900 tracking-widest text-xs"
						>
							Adres
						</h2>
						<p class="mt-1">Ahatlı mahallesi Ulusoy Cad. 96/A Kepez/Antalya</p>
					</div>
					<div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
						<h2
							class="title-font font-semibold text-gray-900 tracking-widest text-xs"
						>
							Email
						</h2>
						<a
							class="text-red-500 leading-relaxed"
							href="mailto:nobetciteknikservis07@gmail.com"
							>nobetciteknikservis07@gmail.com</a
						>
						<h2
							class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4"
						>
							Telefon
						</h2>
						<a class="mr-5 hover:text-gray-900" href="tel:+90-542-802-46-30">
							<Icon name="ic:baseline-local-phone" />
							542-802-46-30</a
						>|<a class="mr-5 hover:text-gray-900" href="tel:+90-538-239-39-96">
							538-239-39-96</a
						>
					</div>
				</div>
			</div>
			<form
				method="get"
				action="mailto:nobetciteknikservis07@gmail.com"
				class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
			>
				<h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
					Bizimle İletişime Geçin
				</h2>
				<p class="leading-relaxed mb-5 text-gray-600">
					Daha iyi bir hizmet için istek ve önerilerinizi yazabilirsiniz.
				</p>
				<div class="relative mb-4">
					<label for="name" class="leading-7 text-sm text-gray-600"
						>Adınız</label
					>
					<input
						type="text"
						id="name"
						name="name"
						required
						class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
					/>
				</div>
				<div class="relative mb-4">
					<label for="subject" class="leading-7 text-sm text-gray-600"
						>Konu</label
					>
					<input
						type="subject"
						id="subject"
						name="subject"
						required
						class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
					/>
				</div>
				<div class="relative mb-4">
					<label for="message" class="leading-7 text-sm text-gray-600"
						>Mesaj</label
					>
					<textarea
						id="message"
						name="body"
						required
						class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
					></textarea>
				</div>
				<button
					class="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
				>
					Gönder
				</button>
			</form>
		</div>
	</section>
</template>
