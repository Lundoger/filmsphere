import { useActions } from "@/hooks/useActions"
import { Button } from "@/shared/Button/Button"
import { Bookmark, MonitorPlay, PlayCircle, Share2, Star } from "lucide-react"
import React from "react"

const Buttons = () => {
    const { trailerModalToggle } = useActions()
    const handleTrailerModalOpen = () => {
        //получаем ширину скролл бара  и при открытии модалки даем отступ хедеру что бы не было прыжка при открытии
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
        document.body.style.paddingRight = `${scrollbarWidth}px`

        //тоглим стейт в 'true' когда модалка открыта
        trailerModalToggle(true)
    }

    return (
        <div className="movie-hero__actions">
            <Button
                className="movie-hero__actions-button"
                gradient
                rounded
                size="big"
                endIcon={<MonitorPlay />}
            >
                Смотреть
            </Button>
            <Button
                className="movie-hero__actions-button movie-hero__actions-button--trailer"
                rounded
                variant="glass"
                endIcon={<PlayCircle />}
                onClick={handleTrailerModalOpen}
            >
                Трейлер
            </Button>
            <Button
                className="movie-hero__actions-button movie-hero__actions-button--save"
                rounded
                endIcon={<Bookmark />}
                variant="glass"
            ></Button>
            <Button
                className="movie-hero__actions-button movie-hero__actions-button--rating"
                rounded
                endIcon={<Star />}
                variant="glass"
            ></Button>
            <Button
                className="movie-hero__actions-button movie-hero__actions-button--share"
                rounded
                endIcon={<Share2 />}
                variant="glass"
            ></Button>
        </div>
    )
}

export default Buttons
