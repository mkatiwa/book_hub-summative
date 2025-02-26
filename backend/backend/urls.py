from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static


from django.urls import path, include
# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
#     TokenRefreshView,
# )
from accounts.views import register

urlpatterns = [
    path('admin', admin.site.urls),
    path('', include('bookhub.urls')),
    # path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # path('api/register/', register, name='register'),
]+static (settings.MEDIA_URL,document_root = settings.MEDIA_ROOT)