import {Image as ExpoImage, ImageStyle} from 'expo-image';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

interface IImageProps {
  source: string;
  style?: ImageStyle;
  placeholder?: string;
  contentFit?: 'cover' | 'contain';
  transition?: number;
  testID?: string;
}

export function Image({
  transition = 1000,
  contentFit = 'cover',
  ...props
}: IImageProps) {
  return (
    <ExpoImage
      placeholder={blurhash}
      contentFit={contentFit}
      transition={transition}
      {...props}
    />
  );
}
