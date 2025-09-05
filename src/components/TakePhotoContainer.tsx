import { IonButton } from "@ionic/react";
import { usePhotoGallery } from "../hooks/usePhotoGallery";

export default function TakePhotoContainer () {
  const { takePhoto } = usePhotoGallery();

  return (
    <div className="container">
      <IonButton onClick={takePhoto}>
        Tirar foto
      </IonButton>
    </div>
  );
}
