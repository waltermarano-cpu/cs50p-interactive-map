import { useEffect } from 'react';

export function useServiceWorker() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/service-worker.js')
          .then((registration) => {
            console.log('Service Worker registrado com sucesso:', registration);

            // Verificar atualizações periodicamente
            setInterval(() => {
              registration.update();
            }, 60000); // A cada 1 minuto

            // Listener para atualizações disponíveis
            registration.addEventListener('updatefound', () => {
              const newWorker = registration.installing;
              if (newWorker) {
                newWorker.addEventListener('statechange', () => {
                  if (
                    newWorker.state === 'installed' &&
                    navigator.serviceWorker.controller
                  ) {
                    // Nova versão disponível
                    console.log('Nova versão do app disponível!');
                    // Você pode mostrar uma notificação aqui
                    showUpdateNotification();
                  }
                });
              }
            });
          })
          .catch((error) => {
            console.warn('Erro ao registrar Service Worker:', error);
          });
      });
    }
  }, []);
}

function showUpdateNotification() {
  // Verificar se o navegador suporta notificações
  if ('Notification' in window && Notification.permission === 'granted') {
    new Notification('CS50P Mind Map', {
      body: 'Uma nova versão do app está disponível. Recarregue a página para atualizar.',
      icon: '/icon-192.png',
      badge: '/icon-192.png',
    });
  }
}
