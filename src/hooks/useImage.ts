import {
  AbacaxiThumbnail,
  BananaThumbnail,
  MacaThumbnail,
  MangaThumbnail,
  PeraThumbnail,
} from '../assets/images/thumbnail';
import {
  Abacaxi,
  Banana,
  Maca,
  Manga,
  Pera,
} from '../assets/images';

interface useImageProps {
  productId: number
  thumbnail?: boolean
}

export function useImage({ productId, thumbnail }: useImageProps) {
  if (thumbnail) {
    switch (productId) {
      case 1: return AbacaxiThumbnail;
      case 2: return BananaThumbnail;
      case 3: return MacaThumbnail;
      case 4: return MangaThumbnail;
      case 5: return PeraThumbnail;
      default: return undefined;
    }
  } else {
    switch (productId) {
      case 1: return Abacaxi;
      case 2: return Banana;
      case 3: return Maca;
      case 4: return Manga;
      case 5: return Pera;
      default: return undefined;
    }
  }
}
