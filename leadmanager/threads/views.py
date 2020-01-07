from django.shortcuts import render, redirect
from .models import Threads, User

def index(request):
    if request.method == 'POST':
        
        title = request.POST['title']
        text = request.POST['text']
        user_id = request.POST['user_id']
        
        thread = Threads(user=user_id, title=title, text=text)


        thread.save()

        return redirect('thread/'+thread_id)

    threads = Threads.objects.all()

    context = {
        'threads' : threads
    }

    return render(request, 'threads/threads.html', context)

def thread(request, thread_id):
    return render(request, 'threads/thread.html')

def search(request):
    return render(request, 'threads/search.html')

def addThread(request):
    return render(request, 'threads/addThread.html')
