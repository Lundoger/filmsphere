import MovieItem from '@/entities/MovieItem/MovieItem'
import { MovieDocsResponseDtoV14 } from '@/models/Api'
import { CarouselMultiply } from '@/shared/CarouselMultiply/CarouselMultiply'
import Spinner from '@/shared/Spinner/Spinner'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { FreeMode, Navigation } from 'swiper'

interface CategoryProps {
	href: string,
	title: string,
	isLoading: boolean,
	data: MovieDocsResponseDtoV14 | null | undefined
} 

const Category = ({href, title, data, isLoading}: CategoryProps) => {
	return (
		<section className="category-section">
			<div className="category-section__container">
				{isLoading && (
					<div className='loader--container'>
						<Spinner />
					</div>
				)}
				{!isLoading && (
					<>
						<Link
							href={href}
							className="category-section__title"
						>
							{title}
							<span className="category-section__icon">
								<ChevronRight />
							</span>
						</Link>
						{data && (
							<CarouselMultiply
								className="category-section__swiper"
								items={data.docs}
								slideClassName="category-section__swiper-slide"
								freeMode={{ momentumBounceRatio: 0 }}
								modules={[FreeMode, Navigation]}
								renderItem={(item) => <MovieItem item={item} />}
							/>
						)}
					</>
				)}
			</div>
		</section>
	)
}

export default Category