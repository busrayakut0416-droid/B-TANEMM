FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

COPY ["BİTANEMM/BİTANEMM.csproj", "BİTANEMM/"]
RUN dotnet restore "BİTANEMM/BİTANEMM.csproj"

COPY . .
WORKDIR "/src/BİTANEMM"
RUN dotnet publish "BİTANEMM.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app

COPY --from=build /app/publish .

ENV ASPNETCORE_HTTP_PORTS=10000
EXPOSE 10000

ENTRYPOINT ["dotnet", "BİTANEMM.dll"]
