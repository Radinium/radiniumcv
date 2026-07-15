import biometricImage from "@/images/logos/profile.jpg";

export function GET(request: Request) {
  return Response.redirect(new URL(biometricImage.src, request.url));
}
