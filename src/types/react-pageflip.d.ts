declare module 'react-pageflip' {
  import * as React from 'react'

  export interface IFlipSetting {
    startPage?: number
    size?: 'fixed' | 'stretch'
    width: number
    height: number
    minWidth?: number
    maxWidth?: number
    minHeight?: number
    maxHeight?: number
    drawShadow?: boolean
    flippingTime?: number
    usePortrait?: boolean
    startZIndex?: number
    autoSize?: boolean
    maxShadowOpacity?: number
    showCover?: boolean
    mobileScrollSupport?: boolean
    swipeDistance?: number
    clickEventForward?: boolean
    useMouseEvents?: boolean
  }

  export interface IEventProps {
    onFlip?: (e: { data: number }) => void
    onChangeOrientation?: (e: { data: 'portrait' | 'landscape' }) => void
    onChangeState?: (e: { data: 'user_fold' | 'fold_corner' | 'flipping' | 'read' }) => void
    onInit?: (e: { data: any }) => void
    onUpdate?: (e: { data: any }) => void
  }

  export interface HTMLFlipBookProps extends IFlipSetting, IEventProps {
    className?: string
    style?: React.CSSProperties
    children: React.ReactNode
    renderOnlyPageLengthChange?: boolean
  }

  export interface PageFlipInstance {
    getPageCount: () => number
    getCurrentPageIndex: () => number
    turnToPage: (page: number) => void
    turnToNextPage: () => void
    turnToPrevPage: () => void
    flipNext: (corner?: 'top' | 'bottom') => void
    flipPrev: (corner?: 'top' | 'bottom') => void
    flip: (page: number, corner?: 'top' | 'bottom') => void
    loadFromImages: (images: string[]) => void
    loadFromHTML: (items: NodeListOf<HTMLElement> | HTMLElement[]) => void
    destroy: () => void
    on: (event: string, callback: (e: any) => void) => void
    off: (event: string) => void
    getOrientation: () => 'portrait' | 'landscape'
    getState: () => string
    getBoundsRect: () => DOMRect
    update: () => void
  }

  export interface HTMLFlipBookForwardRef {
    pageFlip: () => PageFlipInstance
  }

  const HTMLFlipBook: React.ForwardRefExoticComponent<
    HTMLFlipBookProps & React.RefAttributes<HTMLFlipBookForwardRef>
  >

  export default HTMLFlipBook
}
