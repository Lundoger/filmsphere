import { useActions } from "@/hooks/useActions"
import { useAppSelector } from "@/hooks/useAppSelector"
import Modal from "@/shared/Modal/Modal"
import React from "react"
import { socialLinks } from "./config/config"

const ShareModal = () => {
    const { isShareModalOpen } = useAppSelector(state => state.toggleReducer)
    const { shareModalToggle } = useActions()

    if (!isShareModalOpen) return null

    return (
        <Modal
            handleClose={() => shareModalToggle(false)}
            isOpen={isShareModalOpen}
            className="share-modal"
        >
            <div className="share-modal__container">
                <div className="share-modal__content">
                    <h2 className="share-modal__title title">Поделиться</h2>
                    <div className="share-modal__social social-share-modal">
                        {socialLinks.map(({ button, icon, text }) => {
                            const Button = button
                            const Icon = icon

                            return (
                                <Button url={window.location.href}>
                                    <Icon size={50} round />
                                    <span>{text}</span>
                                </Button>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default ShareModal
